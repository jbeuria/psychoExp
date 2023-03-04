<script>
    import {initJsPsych} from 'jspsych';
    import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
    import 'jspsych/css/jspsych.css';
    /*import externalHtml from '@jspsych/plugin-external-html';*/

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
  downloadCSV('stroop_results.csv', data);
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

  
  /* Declare Timeline */
    var timeline = [];

  /* define welcome message trial */
    var welcome = {
    type: htmlKeyboardResponse,
    stimulus: '<p style="background-color: yellow; font-weight: bold;">Experiment will begin soon please wait..</p>',
    post_trial_gap: 100
    };
    
    timeline.push(welcome);
  
  /* defining instruction trial */
    var instructions = {
    type: htmlKeyboardResponse,
    stimulus: `
     <div style="text-align: center;">
      <h1>Stroop Test</h1>
      <h2>Welcome to the Stroop Experiment</h2>
      <p>In this experiment, your task will be to <strong>
        identify the color on the screen.</strong></p>
    </div>
    <p>The word itself is immaterial- you can safely ignore it.</p>
    <p>To indicate the color of the word, please use the keys <strong> 
        r, g, b and o</strong> for<div style="color: red;">red</div> 
        <div style="color: green;">green</div> 
        <div style="color: blue;">blue</div> and 
        <div style="color: orange;">orange</div> respectively</p>

    
    <p><strong>Please answer quickly</strong> and accurate as you can.</p>
    <p>Press any key to start.</p>
  `
    
  };

    timeline.push(instructions);
   /* defining text stimuli for red, green ,blue ,orange*/
    var test_stimuli =[
        {stimulus:'<p style="color: red;font-size: 34px;font-weight: bold;">blue</p>', correct_response:'r'},
        {stimulus:'<p style="color: green;font-size: 34px;font-weight: bold;">red</p>', correct_response:'g'},
        {stimulus:'<p style="color: blue;font-size: 34px;font-weight: bold;">orange</p>', correct_response:'b'},
        {stimulus:'<p style="color: orange;font-size: 34px;font-weight: bold;">green</p>', correct_response:'o'}
    ];
    
        /* define fixation and test trials */
    var fixation = {
      type: htmlKeyboardResponse,
      stimulus: '<div style="font-size:60px;">+</div>',
      choices: "NO_KEYS",
      trial_duration: function(){
        return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
      },
      data: {
        task: 'fixation'
      }
    };

    var test = {
      type: htmlKeyboardResponse,
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['r', 'g', 'b','o'],
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
      timeline: [fixation,test],
      timeline_variables: test_stimuli,
      repetitions: 50,
      randomize_order: true
    };
    timeline.push(test_procedure);
   
    /* giving brief about your accuracy */
  var debrief_block = {
  type: htmlKeyboardResponse,
  stimulus: function() {

    var trials = jsPsych.data.get().filter({task: 'response'});
    var correct_trials = trials.filter({correct: true});
    var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
    var rt = Math.round(correct_trials.select('rt').mean());

    return `<p>You responded correctly on ${accuracy}% of the trials.</p>
      <p>Your average response time was ${rt}ms.</p>
      <p>Press any key to complete the experiment. Thank you!</p>`;

  }
};

 timeline.push(debrief_block);

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
 jsPsych.run(timeline);

</script>

<svelte:head>
<meta charset="utf-8">
  <title>Stroop Experiment</title>
  
</svelte:head>