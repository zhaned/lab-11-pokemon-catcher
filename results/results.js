import { getPokeData } from '../localStorageUtils.js';
import { labelsArray, encounterArray, caughtArray } from './mungeUtil.js';

const pokeData = getPokeData();
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: labelsArray(pokeData),
        datasets: [{
            label: '# of Encounters',
            data: encounterArray(pokeData),
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, { label: '# of caught',
            data: caughtArray(pokeData),
            backgroundColor: 'rgba(54, 162, 235, 0.4)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});