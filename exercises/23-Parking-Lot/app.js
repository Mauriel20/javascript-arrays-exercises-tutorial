let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
const getParkingLotState = (parking_state)=>{
   let state = {
        totalSlots:0,
        availableSlots: 0,
       occupiedSlots:0
   }
   parking_state.forEach(filas => {
        filas.forEach(columnas =>{
            if(columnas == 1){
                state.occupiedSlots++;
                state.totalSlots++;
            }else if(columnas == 2){
                
                state.availableSlots++;
                state.totalSlots++;
            }
        });
    }); 
    return state;  
}
console.log(getParkingLotState(parking_state));