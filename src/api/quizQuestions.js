import axios from 'axios';

var quizQuestions = axios.get('http://quizapp-2-ssg.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/quizdetailsnew');

export default quizQuestions;
