var virtualbox = require('virtualbox');

 const  Startkali=function(){
virtualbox.start('Kali', true, function start_callback(error) {
    if (error) throw error;
    console.log('Virtual Machine has started WITH A GUI!');
  });
};

 const StopKali=function(){
virtualbox.stop('Kali', function stop_callback(error) {
    if (error) throw error;
    console.log('Virtual Machine has been saved');
  });
};

 const PauseKali=function(){
virtualbox.pause('Kali', function pause_callback(error) {
    if (error) throw error;
    console.log('Virtual Machine is now paused!');
  });
};

 const ResumeKali=function(){
    virtualbox.resume('machine_name', function resume_callback(error) {
        if (error) throw error;
        console.log('Virtual Machine is now paused!');
      });
    };

     module.exports = {
        Startkali: Startkali,
        StopKali: StopKali,
        PauseKali: PauseKali,
        ResumeKali: ResumeKali
    }