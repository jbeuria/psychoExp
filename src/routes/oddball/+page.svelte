<script>

import {initJsPsych} from 'jspsych';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import 'jspsych/css/jspsych.css';
import audioKeyboardResponse from '@jspsych/plugin-audio-keyboard-response';
import surveyText from '@jspsych/plugin-survey-text';


 /* initialise jsPsych */
   
 var jsPsych=initJsPsych({
  timeline: [trial],
  on_finish: function() {
    // Add additional data to the last trial
  jsPsych.data.addDataToLastTrial({
    end_time: Date.now()
  });

  // Get the data and save it with additional columns
  const data = jsPsych.data.get().csv({
    header: true,
    columns: ['key_press', 'block_duration', 'timing_post_trial', 'trial_id', 'trial_type', 'trial_index', 'time_elapsed', 'internal_node_id', 'exp_id', 'full_screen', 'focus_shifts']
  });

  // Save the data to a CSV file
  downloadCSV('oddball_results.csv', data);
  }
});

// Function to download the CSV file
function downloadCSV(filename, data) {
  const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


var timeline = [];

var welcome = {
    type: htmlKeyboardResponse,
    stimulus: '<p style="background-color: yellow; font-weight: bold;">Welcome to Oddball task. Please press any key to continue.</p>',
    post_trial_gap: 100
    };
    
timeline.push(welcome);

 /* defining instruction trial */
 var instructions = {
    type: htmlKeyboardResponse,
    stimulus: `
     <div style="text-align: center;">
      <h1>Oddball Task</h1>
      
      <p>In this experiment,two different audio will be played.</p>
      <p>If you listen a high pitch <strong>press h for High</strong></p>
      <p><strong>Please answer quickly</strong> and accurate as you can.</p>
      <p>Press any key to start.</p>
  `
    
  };

timeline.push(instructions);

var oddball_stimuli =[
  { stimulus: '2000hz_50ms.wav', correct_response: 'h'},
  { stimulus: '500hz_50ms.wav'}
];
  

var oddball_trial = {
    type: audioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['h'],
    trial_duration: 1000,
    
    prompt: "<p>Is the pitch high or low? Press 'h' for high.</p>",
    data: {
        task: 'response',
        correct_response: jsPsych.timelineVariable('correct_response')
      },
      on_finish: function(data){
        data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
      }
};



 /* define test procedure */
 var test_procedure = {
      timeline: [oddball_trial],
      timeline_variables: oddball_stimuli,
      repetitions: 50,
      randomize_order: true
    };

timeline.push(test_procedure);

 // Define a trial
 var trial = {
  type: htmlKeyboardResponse,
  stimulus: 'Press any key to download experiment results',
  choices: "ALL_KEYS",
  data: {
    trial_type: 'intro'
  }
};

timeline.push(trial);

var thanks = {
    type: htmlKeyboardResponse,
    stimulus: '<p style="background-color: red; font-weight: bold;">Thankyou for attempting the task</p>',
    };

timeline.push(thanks);

jsPsych.run(timeline);

</script>

<svelte:head>
<meta charset="utf-8">
  <title>Oddball task</title>
  
</svelte:head>