import React from 'react';
import Card from '../common/Card';

const Access = ({ data, title, titleColor = '#FFBC6E' }) => {
  return (
    <>
      {!!title && <h3>{title}</h3>}
      {data.map((list, key) => {
        return (
          <div key={key}>
            <ul key={`Acess=${key}`} style={{ fontSize: '.875rem' }}>
              <span className="cardTitle" style={{ color: titleColor }}>
                {list.title}
              </span>
              {list.payload.map((access, key) => {
                if (!!access.entry)
                  return (
                    <li key={`AcessLi=${key}`}>
                      <span>
                        {access.name}
                        {'  '}
                      </span>
                      <span>{`${access.entry} - ${access.exit}`}</span>
                    </li>
                  );

                return (
                  <li key={`AcessLi2=${key}`}>
                    <span>{access.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

const AccessFlowCard = ({ data, title }) => {
  return (
    <Card>
      {data.map((item, key) => {
        return (
          <Access data={item} key={`AcessFlowCard=${key}`} title={title} />
        );
      })}
    </Card>
  );
};

export default AccessFlowCard;
