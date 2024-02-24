import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ReactVerticalTimeline = () => {
  const vaccines = [
    { name: 'Vaccine 1', description: 'Description for Vaccine 1', date: '2023-01-01', isDone: true },
    { name: 'Vaccine 2', description: 'Description for Vaccine 2', date: '2023-02-01', isDone: true },
    { name: 'Vaccine 3', description: 'Description for Vaccine 3', date: '2023-03-01', isDone: true },
    { name: 'Vaccine 4', description: 'Description for Vaccine 4', date: '2023-04-01', isDone: false },
    { name: 'Vaccine 5', description: 'Description for Vaccine 5', date: '2023-05-01', isDone: false },
    { name: 'Vaccine 6', description: 'Description for Vaccine 6', date: '2023-06-01', isDone: false },
    { name: 'Vaccine 7', description: 'Description for Vaccine 7', date: '2023-07-01', isDone: false },
    { name: 'Vaccine 8', description: 'Description for Vaccine 8', date: '2023-08-01', isDone: false },
    { name: 'Vaccine 9', description: 'Description for Vaccine 9', date: '2023-09-01', isDone: false },
    { name: 'Vaccine 10', description: 'Description for Vaccine 10', date: '2023-10-01', isDone: false }
  ];
  
  return (
    <div className='container' fluid>
      <div className="row">
        <div className="d-flex col-12 p-0 m-0">
          <VerticalTimeline layout="1-column-left">
            {vaccines.map((vaccine, index) => (
              <VerticalTimelineElement
                key={index}
                date={vaccine.date}
                iconStyle={{ background: vaccine.isDone ? 'rgb(33, 150, 243)' : 'rgb(233, 30, 99)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">{vaccine.name}</h3>
                <p>{vaccine.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}
export default ReactVerticalTimeline;
