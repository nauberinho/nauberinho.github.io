class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
             objectsArr: [
                 {
                 product: 'Output Exhale',
                 price: '90',
                 key: 1
                 },
                 {
                 product: 'Serum',
                 price: '120',
                 key: 2
                 },
                 {
                 product: 'FabFilter EQ',
                 price: '150',
                 key: 3
                 },
                 {
                 product: 'Sylenth',
                 price: 'piratebay.org',
                 key: 4
                 }
             ],
            newObject: 
                 {
                 product: 'none',
                 price:0,
                 key:0
                 },
            mode: 'display',
            productInputValue: undefined,
            priceInputValue:undefined,
            temporaryList: [],
            filteredList: []
        };
        this.updateNewObject = this.updateNewObject.bind(this);
        this.addObject = this.addObject.bind(this);
        this.addLi = this.addLi.bind(this);
        this.fillForm = this.fillForm.bind(this);
        this.deleteObject=this.deleteObject.bind(this);
        this.addEditableLi=this.addEditableLi.bind(this);
        this.modeToEdit=this.modeToEdit.bind(this);
        this.modeToDisplay=this.modeToDisplay.bind(this);
        this.updateObject=this.updateObject.bind(this);
        
  };

    updateNewObject(event){
        switch(event.target.id){
            case 'product':
                      this.setState({productInputValue:  event.target.value})
                      break;
            case 'price':
                      this.setState({priceInputValue:  event.target.value})
                      break;
        };        
        let newObject = {
                        product: this.state.productInputValue,
                        price:this.state.priceInputValue,
                        key: eval(Number(this.state.objectsArr.length)+1)
                        }
        this.setState({newObject: newObject});
    };

      addObject(e){
            if (e.target.id=='product' || e.target.id=='addButton' || e.target.id=='price') {
                  if (e.keyCode == 13 || e.target.id =='addButton') {                  
                          if (this.state.productInputValue.length != 0 && this.state.priceInputValue != 0) {
                              let newObjectsArr = this.state.objectsArr;
                                  newObjectsArr.push(this.state.newObject);
                                  this.setState({objectsArr: newObjectsArr});
                                  let resettingNewObject = {product: 'noName', price: 0, key: this.state.objectsArr.length+1};
                                  this.setState({newObject: resettingNewObject});
                                  this.addLi();
                                  this.setState({productInputValue: ''});
                                  this.setState({priceInputValue: ''});
                          };
                  };        
            };

      };
    
    addLi(){ 
        const newObjectsArray = this.state.objectsArr.map((product) =>                             
            <li className='object-li' data-index = {product.key.toString()} key={product.key} onClick={this.fillForm} >
                    <input className='list-input none-editable-li' data-index = {product.key.toString()} key1={product.key} onKeyDown={()=>addObject}readOnly='true'  value={product.product} onClick={this.fillForm}/>
                    <input className='list-input none-editable-li' data-index = {product.key.toString()} key2={product.key} readOnly='true'  value={product.price} onClick={this.fillForm}/>
            </li> 
        );                             
        return <ul>{newObjectsArray}</ul>;
    };
    
    addEditableLi(){
        const newObjectsArray=this.state.objectsArr.map((product) =>                       
              <li className='object-li' data-index = {product.key.toString()} key={product.key}>
                      <input className='list-input' data-type='product' data-index={product.key} readOnly={false} defaultValue={product.product} onKeyDown={this.updateObject} onChange={this.updateObject}/>
                      <input className='list-input' data-type='price' data-index={product.key} readOnly={false} defaultValue={product.price} onKeyDown={this.props.updateObject} onChange={this.updateObject} />
                  <button data-index={product.key} onClick={this.deleteObject} className='delete-button'>X</button> 
              </li> );
        return <ul>{newObjectsArray}</ul>
    };
    
    updateObject(e){
        let temporaryList = this.state.temporaryList;
        if(temporaryList.includes(this.state.objectsArr[e.target.getAttribute('data-index')-1])!=true){
            temporaryList.push(this.state.objectsArr[e.target.getAttribute('data-index')-1]);
        };
        temporaryList[e.target.getAttribute('data-index') - 1][e.target.getAttribute('data-type')] = e.target.value;
        this.setState({temporaryList: temporaryList});
    };
    
    fillForm(e){
        console.log(e.target)
         let array = this.state.objectsArr;
        console.log(array)
         this.setState({productInputValue: array[Number(e.target.getAttribute('data-index'))-1].product}); 
         this.setState({priceInputValue: array[Number(e.target.getAttribute('data-index'))-1].price});
    };
    
    deleteObject(e){
        let eventindex = e.target.getAttribute('data-index');
        this.setState({eventindex: eventindex})
        var newList;
        if(this.state.filteredList.length>0){  
            newList=this.state.filteredList;
        }else{
            newList=this.state.objectsArr;
        };
        let finalList= newList.filter(function(obj){  
             return obj.key != e.target.getAttribute('data-index');   
        });
        e.target.parentNode.className = 'object-li to-delete'
        e.target.innerHTML = '<i class="material-icons">settings_backup_restore</i>'
        this.setState({filteredList: finalList});
    };
            
    modeToEdit(){
         this.setState({mode: 'edit'});
    };
    
    modeToDisplay(){
        if(this.state.filteredList.length>0){
            let filteredList = this.state.filteredList;
            let i=0;
             for(let i=0; i<filteredList.length; i++){
                filteredList[i].key=i+1;
            }
         this.setState({objectsArr: this.state.filteredList})
         this.setState({filteredList: []})
        }
        if(this.state.temporaryList.length>0){
            let newList = this.state.ObjectsArr;
            if(newList!=undefined){
                for(let i=0;i<this.state.temporaryList.length; i++){
                    newList[this.state.temporaryList[i].key-1] = this.state.temporaryList[i];
                };
                
                this.setState({objectsArr: newList});
                this.setState({temporaryList: []});
            }
        }
        this.setState({mode: 'display'})
    };
            
    render(){
        if(this.state.mode=='display'){
                return(
                    <div className='app-container'>
                        <AddForm priceInputValue={this.state.priceInputValue}  productInputValue={this.state.productInputValue} addObject={this.addObject} updateNewObject={this.updateNewObject}/>
                        <MyList addLi={this.addLi}/>
                        <EditButton modeToEdit={this.modeToEdit}/>
                    </div>
                )
            }else if(this.state.mode=='edit'){
                return(
                    <div className='app-container'>
                        <AddForm addObject={this.addObject} updateNewObject={this.updateNewObject}/>
                        <EditObject updateObject={this.updateObject} addEditableLi={this.addEditableLi}/>
                        <DoneButton modeToDisplay={this.modeToDisplay}/>
                    </div>
                    );
            };
    };
};

class AddForm extends React.Component {
    render(){     
        return(     
                <div className='form-container'>
                    <input placeholder='Type product name' onChange={this.props.updateNewObject} value={this.props.productInputValue} onKeyUp={this.props.addObject} type="text" id='product'></input>
                    <input placeholder='Type price' onChange={this.props.updateNewObject} value={this.props.priceInputValue} onKeyUp={this.props.addObject} type="text" id='price'></input>
                    <button id='addButton'  onClick={this.props.addObject}>Add Object</button>
                </div>
             );
    };
};
    
class MyList extends React.Component{
    render(){
        return(
            <div className='list-container'>
               <div className='categories'><div className='categories-child'>Product name</div><div className='categories-child'>Price</div></div>
                {this.props.addLi()}
            </div>
        );
    };
};

class EditObject extends React.Component{
    render(){
        return(
            <div className='list-container'>
               <div className='categories'><div className='categories-child'> Product name</div><div className='categories-child'>Price</div></div>
                {this.props.addEditableLi()}
            </div>
        )
    }
};

class DoneButton extends React.Component{
    render(){ 
        return(
            <div className='edit-div'>
                <button id='donebutton' onClick={this.props.modeToDisplay} className='done-button'><i className="material-icons">check_circle</i></button>
            </div>
        );
    };
};

class EditButton extends React.Component{
    render(){
        return(
            <div className='edit-div'>
                <button onClick={this.props.modeToEdit} className='edit-button'><i id='edit-symbol' className="edit-symbol material-icons">mode_edit</i></button>
            </div>
        );
    };
};

ReactDOM.render(
  <App product='prod' price='5'/>,
  document.getElementById('app')
);