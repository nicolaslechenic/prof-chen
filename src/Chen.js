console.log('Hello Webpack !');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/chen.scss';

const bgOptions = [
    { value: 'earth-1', label: 'Earth standard' },
    { value: 'earth-2', label: 'Earth burn' },
    { value: 'manga-1', label: 'Manga' },
    { value: 'manga-2', label: 'Gloups' },
    { value: 'manga-3', label: 'Money' },
    { value: 'paysage-1', label: 'Paysage' },
];

const charactersOptions = [
    { value: 'chen-1', label: 'Chen normal' },
    { value: 'chen-2', label: 'Chen angry' },
    { value: 'chen-3', label: 'Chen gloups' },
    { value: 'chen-4', label: 'Chen afraid' },
    { value: 'sensei-1', label: 'Sensei normal' }
];

const textsOptions = [
    { value: '1', label: 'Text normal' },
    { value: '2', label: 'Text important' }
];


class Chen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            background: '1',
            chen: '1',
            text: '1',
            message: ''
        };

        this.upMessage = this.upMessage.bind(this);
        this.handleChangeBackground = this.handleChangeBackground.bind(this);
        this.handleChangeCharacter = this.handleChangeCharacter.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    upMessage(event) {
        this.setState({message: event.target.value});
    }

    handleChangeBackground(selectedOption) {
        console.log(selectedOption);
        this.setState({background: selectedOption.value});
    }

    handleChangeCharacter(selectedOption) {
        this.setState({chen: selectedOption.value});
    }

    handleChangeText(selectedOption) {
        this.setState({text: selectedOption.value});
    }

    render() {
        let {
            background,
            chen,
            text,
            message
        } = this.state;

        return (
            <Container>
                <Row>
                    <Col sm={8}>
                        <img className="msg" src={`./images/background/${background}.png`} />
                        <img className="msg" src={`./images/character/${chen}.png`} />
                        <img className="msg" src={`./images/textarea/text-${text}.png`} />
                        <p className="msg msg-text">{message}</p>
                    </Col>
                    <Col sm={4}>

                        <Select
                            value={background}
                            onChange={this.handleChangeBackground}
                            options={bgOptions}
                            className='select'
                            placeholder='Background'
                        />
                        <Select
                            value={chen}
                            onChange={this.handleChangeCharacter}
                            options={charactersOptions}
                            className='select'
                            placeholder='Character'
                        />
                        <Select
                            value={text}
                            onChange={this.handleChangeText}
                            options={textsOptions}
                            className='select'
                            placeholder='Textarea'
                        />
                        <br/>
                        <span className="section">Mon message</span>
                        <textarea onChange={this.upMessage}></textarea>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const yieldNode = document.querySelector('#yield');
ReactDOM.render(
    <Chen />,
    yieldNode
);