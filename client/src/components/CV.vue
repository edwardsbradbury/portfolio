<template>
  <div id='CV'>

    <h2>CV</h2>

    <div class='cvSection'>
      <h3>Employment history</h3>

      <div v-for='job in jobs' :key='job.startDate' class='job'>
        <table>
          <tr style='font-weight:bold;'>{{job.company}}</tr>
          <tr>{{job.position}}: {{formateDate(job.startDate)}} - {{formateDate(job.endDate)}}</tr>
          <tr></tr>
          <tr>{{job.summary}}</tr>
        </table>
      </div>

    </div>

    <div class='cvSection'>

      <h3>Education</h3>

      <div class='eduSection'></div>

      <div class='eduSection'></div>

      <div class='eduSection'></div>

      <div class='eduSection'></div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'CV',
  props: ['jobs'],
  methods: {
    formateDate(date) {
      let jsDateObj = new Date(date);
      let month = jsDateObj.getMonth();
      
      switch(month) {
        case 0:
          month = 'January';
          break;
        case 1:
          month = 'February';
          break;
        case 2:
          month = 'March';
          break;
        case 3:
          month = 'April';
          break;
        case 4:
          month = 'May';
          break;
        case 5:
          month = 'June';
          break;
        case 6:
          month = 'July';
          break;
        case 7:
          month = 'August';
          break;
        case 8:
          month = 'September';
          break;
        case 9:
          month = 'October';
          break;
        case 10:
          month = 'November';
          break;
        default:
          month ='December';
      }
      return `${month} ${jsDateObj.getFullYear()}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
