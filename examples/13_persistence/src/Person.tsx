import React, { ChangeEventHandler } from 'react';
import _ from 'lodash';
import { dispatch, useGlobalState } from './state';

const iref = React.createRef<any>();

const masterObj = function (ivalue:any, pperson:any) {
  let iVal = JSON.stringify(pperson, null, 4);
  console.log(iVal);
  return ivalue;
};

const setFirstName = (event: React.FormEvent<HTMLInputElement>, pperson:any) => dispatch({
  firstName: masterObj(event.currentTarget.value, pperson),
  type: 'setFirstName',
});

const setLastName = (event: React.FormEvent<HTMLInputElement>, pperson:any) => dispatch({
  lastName:  masterObj(event.currentTarget.value, pperson),
  type: 'setLastName',
});

const setAge = (event: React.FormEvent<HTMLInputElement>, pperson:any) => dispatch({
  age: Number( masterObj(event.currentTarget.value, pperson)) || 0,
  type: 'setAge',
});

const setBigObject = (event: React.FormEvent<HTMLInputElement| HTMLTextAreaElement>, pperson:any) => dispatch({
  bigObject:  masterObj(event.currentTarget.value, pperson),
  type: 'setBigObject',
});



const Person = () => {
  const [value] = useGlobalState('person');
  

  const thisObject = function (ev: any, fun:any) {
    
    const startvalue = value;
    let sexy = {
      age: startvalue.age,
      firstName: startvalue.firstName,
      lastName: startvalue.lastName
    };
  
    const eve = ev as ChangeEventHandler;

    if (_.isFunction(fun)) {
      type iFunky = ReturnType<typeof setBigObject>;
      const Funky = class iFunky { };
      type iColdMedina = ReturnType<typeof fun>;
      const ColdMedina = class iColdMedina{};

      let iVal = JSON.stringify(startvalue, null, 4);
      console.log(iVal);

      sexy = {
        age: value.age,
        firstName: value.firstName,
        lastName: value.lastName
      };
      let toSexy = JSON.stringify(sexy, null, 4);
      

      if (!_.isEqual(Funky, ColdMedina)) {
        console.log('DONT  MESS WITH THE MEDINA MAN !');
       
      } else {
        console.log('NOT SO FUNKY !');
        value.bigObject = toSexy;
      }
        setBigObject(ev, toSexy);
        fun(ev, value);
     
    } else {
      console.log('Too Legit!');
    }
  }


  return (
    <div><form className="ArticleBody" >
      <div>
        First Name:
        <input value={value.firstName} onChange={(eev)=>thisObject(eev,setFirstName)} />
      </div>
      <div>
        Last Name:
        <input value={value.lastName} onChange={(eev)=>thisObject(eev,setLastName)} />
      </div>
      <div>
        Age:
        <input value={value.age} onChange={(eev)=>thisObject(eev,setAge)} />
      </div>
      <div>
        BIGOBJ:
         <textarea
          ref={iref}
          onChange={(er)=>{thisObject(er,setBigObject)}}
          key="bigObject"
          value={value.bigObject}
          name="bigObject"
          className="bigObject"
          placeholder={value.bigObject}
          data-value={value.bigObject} />
      </div>
      </form>
    </div>
  );
};

export default Person;
