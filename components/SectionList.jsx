import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {
      className,
      style,
      renderItem,
      renderSectionHeader,
      sections,
      keyExtractor
    } = this.props;
    let _className = 'sectionlist-container';

    if (className) {
      _className += ' ' + className;
    }

    return (
      <div className={_className} style={style}>
        {
          sections.map((section, index) => {
            return (
              <div className="flex flex-col" key={keyExtractor(section, index)}>
                {renderSectionHeader(section)}

                <div className="section-item-container">
                  {section.data.map((item, index) =>
                    <div className="" key={index}>
                      {renderItem(item, index)}
                    </div>
                  )}
                </div>
              </div>

            )
          })
        }
      </div>
    )
  }
}