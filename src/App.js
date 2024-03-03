
import { useState } from 'react';

function App() {

  const [inputvalue,setInputvalue]=useState('');
  const [itemlist,SetItemlist]=useState([]);
  const [clicklist,setClicklist]=useState({});
  const [selectstate,setSelectstate]=useState("All");
  const [clear,setClear]=useState('false');

  const handleAdd =()=>{
    const newId = Math.random().toString(36).slice(2, 7);
    {inputvalue !==''&&
    SetItemlist([...itemlist,{ id: newId, text: inputvalue }]);
    setInputvalue('');
    setClear(false);}
  }

  const handleClick = (id) => {
    setClicklist({ ...clicklist, [id]: !clicklist[id] });
  };

  const handleclear =()=>{
    SetItemlist([]);
    setClear(true);
  }

  return (
    <div className="App">
      <div className={'container mx-20'}>
              
              <p className={'text-dark display-1 mb-4 d-flex justify-content-center'}>Todo App</p>

      <div className={'row d-flex justify-content-center'}>
        <div className='col-8 col-lg-3 '>
        <input placeholder='Next Item'  className='form-control border border-info' value={inputvalue} onChange={(e) => setInputvalue(e.target.value)}></input>
        </div>
        <div className='col-4 col-lg-1'>
        <button type="button" className='btn btn-info text-white' onClick={handleAdd} >Add </button>
        </div>
      </div>

       <ul className='list-group mt-2'>
        
        { selectstate ==='All' &&(
          itemlist.map((item)=>(
            
            <div className='row d-flex justify-content-center' key={item.id}>
              <div className='col-lg-4 col-12'>

               { 
                <li className='list-group-item list-group-item-action my-1 rounded-2 text-start ' style={{ textDecoration: clicklist[item.id] ? 'line-through' : 'none' }}
      onClick={() => handleClick(item.id)}
              >{item.text} </li>
               }
               

              </div>
            </div>         
             )

          ))
        }

        { selectstate ==='completed' &&(
          itemlist.map((item)=>(
            
            <div className='row d-flex justify-content-center' key={item.id}>
              <div className='col-lg-4 col-12'>

               {clicklist[item.id] === true &&(
                <li className='list-group-item list-group-item-action my-1 rounded-2 text-start ' >{item.text} </li>)}

              </div>
            </div>         
             )

          ))
        }


        { selectstate ==='active' &&(
          itemlist.map((item)=>(
            
            <div className='row d-flex justify-content-center' key={item.id}>
              <div className='col-lg-4 col-12'>

                 clicklist[item.id] !== true &&(
                <li className='list-group-item list-group-item-action my-1 rounded-2 text-start ' >{item.text}</li>)

              </div>
            </div>         
             )

          ))
                 }    


         {clear === true && (
          <div>All Item is Removed</div>
        )}

        

        


        
       </ul>



        <div className={'row d-flex justify-content-center mt-2'}>
          
          <div className='col-6 col-lg-2 d-flex flex-start '>
           
              <button type="button" className='btn btn-info text-white '   onClick={handleclear}>Clear</button>
             
            
          </div>

        <div className='col-6 col-lg-2 d-flex justify-content-center '>
          <div className='dropdown'>
            <button type="button" className='btn btn-info text-white dropdown-toggle' data-bs-toggle="dropdown" >Show All </button>
            <ul className='dropdown-menu'>
              <li><a className='dropdown-item' onClick={() => setSelectstate("completed")}>Completed</a></li>
              <li><a className='dropdown-item' onClick={() => setSelectstate("active")}>Active</a></li>
              <li><a className='dropdown-item' onClick={() => setSelectstate("All")}>Show All</a></li>
            </ul>
          </div>
        </div>
        
      </div>


      </div>
        
    </div>
  );
}

export default App;
