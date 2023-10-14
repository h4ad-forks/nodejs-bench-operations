## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|138,480,848|88|
|Using parseInt(x, 10) - big number (10 len)|8,686,792|83|
|Using + - small number (2 len)|625,436,900|87|
|Using + - big number (10 len)|622,560,167|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:27:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","hz":138480848.01261464,"cycles":7,"stats":{"deviation":3.6661848710941737e-10,"mean":7.221215166944292e-9,"moe":7.660005759931916e-11,"rme":1.0607640934168843,"sem":3.908166204046896e-11,"variance":1.3440911509039802e-19}},{"name":"Using parseInt(x, 10) - big number (10 len)","hz":8686792.096520806,"cycles":7,"stats":{"deviation":6.884406942609562e-9,"mean":1.1511729403544898e-7,"moe":1.4810971937059134e-9,"rme":1.2865983396463674,"sem":7.556618335234252e-10,"variance":4.739505895145074e-17}},{"name":"Using + - small number (2 len)","hz":625436900.1099641,"cycles":7,"stats":{"deviation":7.924944700254243e-11,"mean":1.5988823170237963e-9,"moe":1.665300780003629e-11,"rme":1.041540557596175,"sem":8.496432551038923e-12,"variance":6.28047485020878e-21}},{"name":"Using + - big number (10 len)","hz":622560166.9764786,"cycles":7,"stats":{"deviation":8.369405727582872e-11,"mean":1.6062704507045368e-9,"moe":1.758697178778227e-11,"rme":1.0948948092812347,"sem":8.972944789684831e-12,"variance":7.004695223289697e-21}}]}-->
