import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import Graphic from './Graphic';

const VERDICTS = 'verdicts';
const PROGRAMMING_LANGUAGES = 'programming-languages';
const GRAPHIC_TYPE = 'pie';

class Statistics extends Component {
  constructor(props) {
    super(props);

    this.getVerdicts = this.getVerdicts.bind(this);
    this.getProgrammingLanguages = this.getProgrammingLanguages.bind(this);
  }

  getData(map, total) {
    let data = [];
    for (const prop in map) {
      data.push({
        label: prop,
        y: (map[prop] / total * 100).toFixed(2)
      });
    };
    return data;
  }
  
  getVerdicts(submissions) {
    let verdicts = [];
    submissions.forEach(submission => {
      if (!verdicts[submission.verdict]) {
        verdicts[submission.verdict] = 0;
      }
      verdicts[submission.verdict]++;
    });
    return this.getData(verdicts, submissions.length);
  }

  getProgrammingLanguages(submissions) {
    let pLanguages = [];
    submissions.forEach(submission => {
      if (!pLanguages[submission.programmingLanguage]) {
        pLanguages[submission.programmingLanguage] = 0;
      }
      pLanguages[submission.programmingLanguage]++;
    });
    return this.getData(pLanguages, submissions.length);
  }

  renderTags(submissions) {
    let tagsMap = [];
    let tagsList = [];
    submissions.forEach(submission => {
      submission.tags.forEach(entry => {
        if (!tagsMap[entry.tag]) {
          tagsMap[entry.tag] = true;
          tagsList.push(entry.tag);
        }
      });
    });
    tagsList.sort();
    return tagsList.map(tag => (
      <div className="statistics__tag pointer flex br1 bg-green white b ma1 items-center justify-center" key={tag}>
        {tag.toUpperCase()}
      </div>
    ));
  }
  
  render() {
    const { intl, submissions } = this.props;

    return (
      <div className="w-100 ph5">
        <h1 className="blue">
          <FormattedMessage id="side-menu.statistics" />
        </h1>
        <div className="flex flex-column">
          
          <div className="flex flex-row pv4 ph4">
            <Graphic 
              container={VERDICTS}
              type={GRAPHIC_TYPE}
              title={intl.formatMessage({ id: 'statistics.verdicts' })}
              data={this.getVerdicts(submissions)}
            />
            <Graphic 
              container={PROGRAMMING_LANGUAGES} 
              type={GRAPHIC_TYPE}
              title={intl.formatMessage({ id: 'statistics.programming-languages' })}
              data={this.getProgrammingLanguages(submissions)}
            />
          </div>

          <div className="flex flex-column items-center overflow-y-auto">
            <h2 className="blue">Tags</h2>
            <div className="inline-flex flex-wrap">
              { this.renderTags(submissions) }  
            </div>
          </div>
        </div>
      </div>
    );
  };
};

Statistics.propTypes = {
  intl: intlShape,
  submissions: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          tag: PropTypes.string.isRequired
        })
      ).isRequired,
      verdict: PropTypes.string.isRequired,
      programmingLanguage: PropTypes.string.isRequired
    })
  ),
};

Statistics.defaultProps = {
  submissions: [
    {
      tags: [
        { tag: 'dp' },
        { tag: 'flows' },
        { tag: 'ad-hoc' }
      ],
      verdict: "OK",
      programmingLanguage: "C++"
    },
    {
      tags: [
        { tag: 'geometry' },
      ],
      verdict: "Time Limit Exceeded",
      programmingLanguage: "C++"
    },
    {
      tags: [
        { tag: 'graphs' },
        { tag: 'brute force' }
      ],
      verdict: "OK",
      programmingLanguage: "Python"
    },
    {
      tags: [
        { tag: 'brute force' },
        { tag: 'math' }
      ],
      verdict: "Wrong Answer",
      programmingLanguage: "Ruby"
    },
    {
      tags: [
        { tag: 'brute force' },
        { tag: 'math' }
      ],
      verdict: "Wrong Answer",
      programmingLanguage: "Ruby"
    },
    {
      tags: [
        { tag: 'flows' },
      ],
      verdict: "Compilation Error",
      programmingLanguage: "Ruby"
    },
    {
      tags: [
        { tag: 'flows' },
      ],
      verdict: "OK",
      programmingLanguage: "Ruby"
    }
  ]
};

export default injectIntl(Statistics);