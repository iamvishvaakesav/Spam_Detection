

void setup() {
 
// Serial is like the port, in setup we define the port number. 
// And the input will be sent through it. Here the port number is 9600
 Serial.begin(9600);   
 
}

void loop() {
  // Serial has a method called avaliable, 
  // which returns integer values if there is data incoming through the Serial
  if(Serial.()>0){
  
  // defining an integer isSpam and setting it to "0", it will be used as a flag
  // the server will send data through the serial port after calcuating the difference of the 2 temperatures
  // the server is designed to send 0 or 1 for isSpam.
  // 0 --> not spam , 1 --> spam 
  int isSpam=0;
  
  // the while loop is used because the serial port will continuously send data, as the temperature sensors sends multiple readings of temperature 
  // to thingSpeak, from where the data is sent to the node server and the difference is calculated.
  // so untill the server sends the data(the difference between the 2 temperatures).
  // we must keep updating the isSpam
  while(Serial.avaliable()>0){
    isSpam = Serial.read();
  }
  
  // after the server stops sending data, the aquired isSpam integer / flag is used to turn off / on the fan
  
  if(isSpam==0){
    
    // keep the fan running 
    
  }
  
  if(isSpam==1){
    
    // turn off the fan
  }
  
  
  
  
    
}
