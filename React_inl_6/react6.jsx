import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    name: 'Robert Åhlund 1',
                    phoneNumber: '072 544 45 45'
                },
                {
                    name: 'Robert Åhlund 2',
                    phoneNumber: '072 123 32 22'
                },
                {
                    name: 'Robert Åhlund 3',
                    phoneNumber: '072 524 54 45'
                },
                {
                    name: 'Robert Åhlund 4',
                    phoneNumber: '072 324 45 45'
                },
                {
                    name: 'Robert Åhlund 5',
                    phoneNumber: '072 554 45 45'
                }
            ],
            active: {
                name: '',
                phoneNumber: ''
            },
            edit: {
                oldName: '',
                newName: '',
                oldNumber: '',
                newNumber: ''
            },
            action: 'add'
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.addObject = this.addObject.bind(this);
        this.toBeRemoved = this.toBeRemoved.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.setOldName = this.setOldName.bind(this);
        this.setNewName = this.setNewName.bind(this);
        this.setOldNumber = this.setOldNumber.bind(this);
        this.setNewNumber = this.setNewNumber.bind(this);
        this.handleListEdit = this.handleListEdit.bind(this);
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }

    handleClick(event) {
        if (this.state.action === 'remove') {
            document.getElementById('remove').focus();
        } else if (this.state.action === 'edit') {
            document.getElementById('old-name').focus();
            //document.getElementById('old-number').focus();
        }
        const targetProps = event.target.innerText.split(',');
        console.log(targetProps);
        this.setState(
            {
                active: {
                    name: targetProps[0],
                    phoneNumber: targetProps[1].slice(1)
                }
            }
        )
    }

    handleChangeName(event) {
        const prevNumber = this.state.active.phoneNumber;
        this.setState(
            {
                active: {
                    name: event.target.value,
                    phoneNumber: prevNumber
                }
            }
        )
    }

    handleChangeNumber(event) {
        const prevName = this.state.active.name;
        this.setState(
            {
                active: {
                    name: prevName,
                    phoneNumber: event.target.value
                }
            }
        )
    }

    addObject() {
        console.log(this.state.arr);
        const prevStateArr = this.state.arr;
        const newStateArr = [...prevStateArr, this.state.active];
        this.setState({arr: newStateArr});
        this.setState(
            {
                active: {
                    name: '',
                    phoneNumber: ''
                }
            }
        )
    }

    toBeRemoved(event) {
        this.setState({itemForRemoval: event.target.value});
    }

    removeItem() {
        let toBeFiltered = this.state.itemForRemoval;
        let filtered = this.state.arr.filter(person => toBeFiltered.indexOf(person.name) === -1);
        this.setState({arr: filtered});
        this.setState(
            {
                active: {
                    name: '',
                    phoneNumber: ''
                }
            }
        )
    }

    setOldName(event) {
        const prevValues = {
            oldName: this.state.edit.oldName,
            newName: this.state.edit.newName,
            oldNumber: this.state.edit.oldNumber,
            newNumber: this.state.edit.newNumber
        };
        this.setState(
            {
                edit: {
                    oldName: event.target.value,
                    newName: prevValues.newName,
                    oldNumber: prevValues.oldNumber,
                    newNumber: prevValues.newNumber
                }
            }
        )
    }

    setNewName(event) {
        const prevValues = {
            oldName: this.state.edit.oldName,
            newName: this.state.edit.newName,
            oldNumber: this.state.edit.oldNumber,
            newNumber: this.state.edit.newNumber
        };
        this.setState(
            {
                edit: {
                    oldName: prevValues.oldName,
                    newName: event.target.value,
                    oldNumber: prevValues.oldNumber,
                    newNumber: prevValues.newNumber
                }
            }
        )
    }

    setOldNumber(event) {
        const prevValues = {
            oldName: this.state.edit.oldName,
            newName: this.state.edit.newName,
            oldNumber: this.state.edit.oldNumber,
            newNumber: this.state.edit.newNumber
        };
        this.setState(
            {
                edit: {
                    oldName: prevValues.oldName,
                    newName: prevValues.newName,
                    oldNumber: event.target.value,
                    newNumber: prevValues.newNumber
                }
            }
        )
    }

    setNewNumber(event) {
        const prevValues = {
            oldName: this.state.edit.oldName,
            newName: this.state.edit.newName,
            oldNumber: this.state.edit.oldNumber,
            newNumber: this.state.edit.newNumber
        };
        this.setState(
            {
                edit: {
                    oldName: prevValues.oldName,
                    newName: prevValues.newName,
                    oldNumber: prevValues.oldNumber,
                    newNumber: event.target.value
                }
            }
        )
    }

    handleListEdit() {
        this.state.arr.map(person => {
            if (person.name === this.state.edit.oldName) {
                person.name = this.state.edit.newName;
                person.phoneNumber = this.state.edit.newNumber;
            }
        });
        this.setState({arr: this.state.arr});
        this.setState(
            {
                active: {
                    name: '',
                    phoneNumber: ''
                }
            }
        );
        document.getElementById('new-name').value = '';
        document.getElementById('new-number').value = '';
    }

    edit() {
        this.setState({action: 'edit'});
        this.setState(
            {
                active: {
                    name: '',
                    phoneNumber: ''
                }
            }
        )
    }

    remove() {
        this.setState(
            {action: 'remove'});
        this.setState(
            {
                active: {
                    name: '',
                    phoneNumber: ''
                }
            }
        )
    }

    render() {
        if (this.state.action === 'add') {
            return (
                <div className="container">
                    <h2>Telefonbok</h2>
                    <MyList names={this.state.arr} handleClick={this.handleClick}/>
                    <AddForm
                        name={this.state.active.name}
                        number={this.state.active.phoneNumber}
                        changeName={this.handleChangeName}
                        changeNumber={this.handleChangeNumber}
                        addObject={this.addObject}
                    />
                    <h2>Jag vill...</h2>
                    <button type="button" onClick={this.edit} className="btn">Redigera en kontakt</button>
                    <button type="button" onClick={this.remove} className="btn">Ta bort en kontakt</button>
                </div>
            );
        } else if (this.state.action === 'edit') {
            return (
                <div className="container">
                    <h2>Telefonbok</h2>
                    <MyList names={this.state.arr} handleClick={this.handleClick}/>
                    <AddForm
                        name={this.state.active.name}
                        number={this.state.active.phoneNumber}
                        changeName={this.handleChangeName}
                        changeNumber={this.handleChangeNumber}
                        addObject={this.addObject}
                    />
                    <h2>Jag vill...</h2>
                    <button type="button" onClick={this.edit} className="btn">Redigera en kontakt</button>
                    <button type="button" onClick={this.remove} className="btn">Ta bort en kontakt</button>
                    <EditListItem
                        name={this.state.active.name}
                        number={this.state.active.phoneNumber}
                        oldName={this.setOldName}
                        newName={this.setNewName}
                        oldnumber={this.setOldNumber}
                        newnumber={this.setNewNumber}
                        handleEdit={this.handleListEdit}
                    />
                    </div>
            );
        } else if (this.state.action === 'remove') {
            return (
                <div className="container">
                    <h2>Telefonbok</h2>
                    <MyList names={this.state.arr} handleClick={this.handleClick}/>
                    <AddForm
                        name={this.state.active.name}
                        number={this.state.active.phoneNumber}
                        changeName={this.handleChangeName}
                        changeNumber={this.handleChangeNumber}
                        addObject={this.addObject}
                    />
                    <h2>Jag vill...</h2>
                    <button type="button" onClick={this.edit} className="btn">Redigera en kontakt</button>
                    <button type="button" onClick={this.remove} className="btn">Ta bort en kontakt</button>
                    <RemoveFromList
                        name={this.state.active.name}
                        setToRemove={this.toBeRemoved}
                        removeItemFromList={this.removeItem}
                    />
                </div>
            );
        }
    }
}

class AddForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Namn" value={this.props.name} onChange={this.props.changeName}
                       className="input"/>
                <input type="text" placeholder="Telefonnummer" value={this.props.number}
                       onChange={this.props.changeNumber}
                       className="input"/>
                <button type="button" onClick={this.props.addObject} className="btn">Lägg till</button>
            </form>
        );
    }
}

class MyList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.names.map(
                    (person, i) => <li key={i}
                                       onClick={this.props.handleClick}>{person.name}, {person.phoneNumber}</li>)}
            </ul>
        );
    }
}

class RemoveFromList extends React.Component {
    render() {
        return (
            <div>
                <h2>Ta bort kontakt</h2>
                <form>
                    <input type="text" id="remove" placeholder="Namn" value={this.props.name}
                           onChange={this.props.setToRemove} onBlur={this.props.setToRemove} className="input"/>
                    <button type="button" onClick={this.props.removeItemFromList} className="btn">Ta bort</button>
                </form>
            </div>
        );
    }
}

class EditListItem extends React.Component {
    render() {
        return (
            <div>
                <h2>Redigera kontakt</h2>
                <form>
                    <input type="text" id="old-name" value={this.props.name} placeholder="Nuvarande namn"
                           onChange={this.props.oldName} onBlur={this.props.oldName} className="input"/>
                    <input type="text" id="new-name" placeholder="Nytt namn" onChange={this.props.newName} className="input"/>
                    <input type="text" id="old-number" value={this.props.number} placeholder="Nuvarande telefonnummer"
                           onChange={this.props.oldnumber} onBlur={this.props.oldnumber}
                           className="input"/>
                    <input type="text" id="new-number" placeholder="Nytt telefonnummer" onChange={this.props.newnumber}
                           className="input"/>
                    <button type="button" onClick={this.props.handleEdit} className="btn">Ändra</button>
                    <button></button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('app')
);