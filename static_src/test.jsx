import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'div',
    { className: 'greeting' },
    'Hello',
    React.createElement(
        'div',
        {},
        'Artur',
    ),
    '!',
);

const MyName = (props) => {
    return (
        <div className="greeting">
            Hello<div>{ props.name }</div>!
        </div>
    );
};


class MyComponent extends React.Component {
    render() {
        return <div>React component { this.props.title }</div>;
    }
}


const a = <MyName name="Artur" />;

ReactDOM.render(
    <MyComponent title='Test' />,
    document.getElementById('root'),
);
