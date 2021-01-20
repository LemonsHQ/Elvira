// REQUIRE PACKAGES & FILES
const player = require('../../module/node-wav-player');


console.log(`
Hello, my name is 

 ********  **          **                 
/**/////  /**         //                  
/**       /** **    ** ** ******  ******  
/*******  /**/**   /**/**//**//* //////** 
/**////   /**//** /** /** /** /   ******* 
/**       /** //****  /** /**    **////** 
/******** ***  //**   /**/***   //********
//////// ///    //    // ///     //////// 

Keys:
1 - 0 Strings            q - i Strings
`);

process.stdin.setRawMode( true );

process.stdin.setEncoding( 'utf8' );

process.stdin.setNoDelay( true );

process.stdin.setMaxListeners(3);



const doSomethingAsync = async () => {
  return new Promise(resolve => {
      process.stdin.on( 'data', function( key ){
        if ( key === 'esc' ) {
          process.stdin.exit();
        }

    
        if ( key === '1' ) {
          player.play({path: './project/shawzin/1-01.wav'})
        }
        if ( key === '2' ) {
          player.play({path: './project/shawzin/1-02.wav'})
        }
        if ( key === '3' ) {
          player.play({path: './project/shawzin/1-03.wav'})
        }
        if ( key === '4' ) {
          player.play({path: './project/shawzin/1-04.wav'})
        }
        if ( key === '5' ) {
          player.play({path: './project/shawzin/1-05.wav'})
        }
        if ( key === '6' ) {
          player.play({path: './project/shawzin/1-06.wav'})
        }
        if ( key === '7' ) {
          player.play({path: './project/shawzin/1-07.wav'})
        }
        if ( key === '8' ) {
          player.play({path: './project/shawzin/1-08.wav'})
        }
        if ( key === '9' ) {
          player.play({path: './project/shawzin/1-09.wav'})
        }      
        if ( key === '0' ) {
          player.play({path: './project/shawzin/1-10.wav'})
        }
        if ( key === 'q' ) {
          player.play({path: './project/shawzin/1-11.wav'})
        }
        if ( key === 'w' ) {
          player.play({path: './project/shawzin/1-12.wav'})
        }      
        if ( key === 'e' ) {
          player.play({path: './project/shawzin/1-13.wav'})
        }
        if ( key === 'r' ) {
          player.play({path: './project/shawzin/1-14.wav'})
        }
        if ( key === 't' ) {
          player.play({path: './project/shawzin/1-15.wav'})
        }         
        if ( key === 'y' ) {
          player.play({path: './project/shawzin/1-16.wav'})
        }
        if ( key === 'u' ) {
          player.play({path: './project/shawzin/1-17.wav'})
        }
        if ( key === 'i' ) {
          player.play({path: './project/shawzin/1-18.wav'})
        }           
        

      })
    })
  }
  const doSomething = async () => {
    await doSomethingAsync()
  }

setImmediate(doSomething)



