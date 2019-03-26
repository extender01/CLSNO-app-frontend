import React from 'react';
import labMethodDefaultState from '../../helper/labMethodDefaultState';




export default class LabMetForm extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = this.props.labMetToEdit || labMethodDefaultState;
        this.state.refRangePrepare = this.refRangeDefault;
        this.state.error = '';
    };

    refRangeDefault = {
        sex: 'U',
        age: '',
        range: '',
        refNote: '',
        sortOrder: ''
    };


   
    onChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        console.log(inputName, inputValue);
        
        this.setState(() => {
            return {[inputName]: inputValue}
        });
    };

    checkboxToggle = (e) => {
       const cbName = e.target.name
       this.setState((prevState) => {
           return {[cbName]: !prevState[cbName] }
       });
    }

    intExtToggle = (e) => {
        const buttonName = e.target.name;
        this.setState(() => {
            if (buttonName === 'calculated') {
                return {
                    category: buttonName,
                     where: 'Výpočtová',
                     draw: "custom: Výpočtová metoda",
                     preanal: "Závisí na podmínkach pro metody nutné k výpočtu",
                     responseNote: "Závisí na dostupnosti metod nutných k výpočtu"

                    }
            } else {
                return {category: buttonName, where: ''}
            }
        });
    };
   
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.where) {
            this.setState(() => ({error: 'Vyplň povinné položky Název a kde se to dělá'}))
        } else {
            this.setState(() => ({error: ''}));
            // fires action dispatch
            this.props.formSubmit(this.state);
       }
    };

    onChangeRef = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        this.setState((prevState) => {
            return {refRangePrepare: {...prevState.refRangePrepare, [inputName]: inputValue}}
        })
    }

    // adds new item to array refRange in componentState based on form data, then wipes form inputs in callback
    addRefRange = (e) => {       
        e.preventDefault();
        this.setState((prevState) => {
            return {refRange: [...prevState.refRange, prevState.refRangePrepare]}
        }, () => {
            this.setState(() => {
                return {refRangePrepare: this.refRangeDefault}
            })
        }
        );
    }

    //when button remove ref range is clicked, array of ref ranges is searched and filtered - every button has value of array index...
    //..if that array index is equal to index of just checked array item, this item is not included in new array...
    //this new array is used to update component state
    removeRefRange = (e) => {
        e.preventDefault();
        const refRangeOrderNumber = Number(e.target.value);
        
        this.setState((prevState) => {
            return {
                refRange:  prevState.refRange.filter((item, index) => {
                    // console.log(refRangeOrderNumber === index);
                    
                    return refRangeOrderNumber !== index
                    
                })
            }
        });
    }



    

    render() {
        // console.log('renderLabMetForm ', this.state, this.props);
        
        return (
            <div>
                {this.state.error && <h2>{this.state.error}</h2>}
               
                {this.props.new && <div className='f labmetform__category'>
                    <button name='internal' className={this.state.category === 'internal' ? 'labmetform__category--active' : undefined} onClick={this.intExtToggle}>Interni</button>
                    <button name='external' className={this.state.category === 'external' ? 'labmetform__category--active' : undefined} onClick={this.intExtToggle}>Externi</button>
                    <button name='calculated' className={this.state.category === 'calculated' ? 'labmetform__category--active' : undefined} onClick={this.intExtToggle}>Výpočtové</button>

                </div> }

                <form onSubmit={this.onSubmit} className='labmetform' >
                    <ul>
                        <li className='f_between labmetform__li'>
                            <label>Název testu</label>
                            <input type='text' name='name' value={this.state.name} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Synonyma</label>
                            <input type='text' name='syn' value={this.state.syn} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Kde se dělá</label>
                            <input list='where' name='where' value={this.state.where} onChange={this.onChange} />
                            <datalist id='where'>
                                <option value='SNO' />
                                <option value='Krnov'/>
                            </datalist>
                        </li>
                        <li className='f_between labmetform__li'> 
                            <label>Název v Akordu</label>
                            <input type='text' name='nameAk' value={this.state.nameAk} onChange={this.onChange} />   
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Skupiny v akordu</label>
                            <input type='text' name='groupAk' value={this.state.groupAk} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Odběr</label>
                            <input type='text' name='draw' value={this.state.draw} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Preanalytika</label>
                            <input type='text' name='preanal' value={this.state.preanal} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Poznámka</label>
                            <input type='text' name='note' value={this.state.note} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Metodika</label>
                            <input type='text' name='metodics' value={this.state.metodics} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Jednotka</label>
                            <input type='text' name='unit' value={this.state.unit} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Odbornost</label>
                            <input type='text' name='expertise' value={this.state.expertise} onChange={this.onChange} />
                        </li>
                    </ul>
                    
                    {this.state.category === 'external' && <ul>  
                        <li className='f_between labmetform__li'>
                            <label>Kdy odjíždí externí</label>
                            <input type='text' name='whenExtTransport' value={this.state.whenExtTransport} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Jak často externí</label>
                            <input type='text' name='extHowOften' value={this.state.extHowOften} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Odezva externí</label>
                            <input type='text' name='extResponse' value={this.state.extResponse} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Odezva externí</label>
                            <input type='text' name='extResponse' value={this.state.extResponse} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Kdo posílá z lab</label>
                            <input type='text' name='parcelWho' value={this.state.parcelWho} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Lab preanalytika</label>
                            <input type='text' name='parcelPreanal' value={this.state.parcelPreanal} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Lab poznámka</label>
                            <input type='text' name='parcelNote' value={this.state.parcelNote} onChange={this.onChange} />
                        </li>
                    </ul> }

                    {this.state.category === 'internal' && <ul>
                        
                        <li className='f_between labmetform__li'>
                            <label>Čas rutina</label>
                            <input type='text' name='rutTime' value={this.state.rutTime} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Statim</label>
                            <input type='checkbox' name='statCare' value={this.state.statCare} onChange={this.checkboxToggle} />
                            <label>Pohotovost</label>
                            <input type='checkbox' name='erCare' value={this.state.erCare} onChange={this.checkboxToggle} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Dohláška</label>
                            <input type='text' name='additionalOrder' value={this.state.additionalOrder} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Kategorie skupiny</label>
                            <input type='text' name='groups' value={this.state.groups} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Mininální objem</label>
                            <input type='text' name='volume' value={this.state.volume} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Poznámka k dostupnosti</label>
                            <input type='text' name='responseNote' value={this.state.responseNote} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Snižující interference</label>
                            <input type='text' name='interfereDown' value={this.state.interfereDown} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Zvyšující interference</label>
                            <input type='text' name='interfereUp' value={this.state.interfereUp} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Fyziologická variabilita</label>
                            <input type='text' name='physVar' value={this.state.physVar} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Biologický poločas</label>
                            <input type='text' name='bioHalfLife' value={this.state.bioHalfLife} onChange={this.onChange} />
                        </li>
                    </ul> }


                    {this.state.category === 'calculated' && <ul>
                        
                        <li className='f_between labmetform__li'>
                            <label>Nutné k výpočtu</label>
                            <input type='text' name='dependencies' value={this.state.dependencies} onChange={this.onChange} />
                        </li>
                        <li className='f_between labmetform__li'>
                            <label>Vzorec</label>
                            <input type='text' name='formula' value={this.state.formula} onChange={this.onChange} />
                        </li>
                    </ul> }                    

                    <ul>
                        <li className='f_center labmetform__li'>
                            <button>Uložit</button>
                        </li>
                    </ul>
                    
                </form>

               <div className='f_stretch'>
                    {this.state.category === 'internal' && <form onSubmit={this.addRefRange} className='labmetform__ref-form g1'>
                        
                        <ul>
                            <li className='f_center labmetform__li'>
                                <label>Referenční meze:</label>
                            </li>

                            <li className='f_between labmetform__li'>
                                <label>Pohlaví:</label>
                                <select name='sex' value={this.state.refRangePrepare.sex} onChange={this.onChangeRef}>
                                    <option value='U'>Uni</option>
                                    <option value='M'>Muž</option>
                                    <option value='F'>Žena</option>
                                </select>
                            </li>
                            <li className='f_between labmetform__li'>
                                <label>Věk:</label>
                                <input type='text' name='age' placeholder='Např. 0 - 15 let' value={this.state.refRangePrepare.age} onChange={this.onChangeRef} />
                            </li>
                            <li className='f_between labmetform__li'>
                                <label>Ref. mez:</label>
                                <input type='text' name='range' placeholder='Např. 0,25 - 0,60' value={this.state.refRangePrepare.range} onChange={this.onChangeRef} />
                            </li>
                            <li className='f_between labmetform__li'>
                                <label>Poznámka k rozmezí:</label>
                                <input type='text' name='refNote' placeholder='Poznámka k mezi' value={this.state.refRangePrepare.refNote} onChange={this.onChangeRef} />
                            </li>
                            <li className='f_between labmetform__li'>
                                <label>Pořadí</label>
                                <input type='text' name='sortOrder' placeholder='Pořadí mezí' value={this.state.refRangePrepare.sortOrder} onChange={this.onChangeRef} />
                            </li>
                            <li className='f_center labmetform__li'>
                                <button>Přidej ref. meze</button>
                            </li>
                        </ul>
                    </form>}


                 

                    
                    {this.state.refRange.length !== 0 && <div className='g1'>
                        {this.state.refRange.map((item, index) => {
                            return (
                                <div className='labmetform__ref-item' key={index}>
                                {item.sex && <p>{item.sex}</p>}
                                <p>{item.age}</p>
                                <p>{item.range}</p>
                                <p>{item.refNote}</p>
                                <p>{item.sortOrder}</p>
                                <button value={index} onClick={this.removeRefRange}>Odstranit ref. mez</button>
                                </div>
                            )
                        })
                    }
                    </div>}
               </div>
                
               

               
            </div>
        )
    };
};








