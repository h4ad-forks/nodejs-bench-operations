## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,852,638|91|
|Raw usage underscore usage|6,288,143|89|
|Manipulating private properties using #|2,386,039|91|
|Manipulating private properties using underscore(_)|758,524,947|90|
|Manipulating private properties using Symbol|771,464,232|88|
|Manipulating private properties using PrivateSymbol|32,524,224|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:30:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Raw usage private field","hz":7852638.478706169,"cycles":5,"stats":{"deviation":7.151312930092359e-9,"mean":1.273457326109789e-7,"moe":1.4693361298247654e-9,"rme":1.1538165431215157,"sem":7.496612907269212e-10,"variance":5.1141276624106156e-17}},{"name":"Raw usage underscore usage","hz":6288143.1393221915,"cycles":5,"stats":{"deviation":1.5215816021434446e-8,"mean":1.5902945875175983e-7,"moe":3.161231614156315e-9,"rme":1.987827688636545,"sem":1.6128732725287322e-9,"variance":2.315210571981412e-16}},{"name":"Manipulating private properties using #","hz":2386039.4447474782,"cycles":6,"stats":{"deviation":1.9760242361368932e-8,"mean":4.19104555124332e-7,"moe":4.0600150377251404e-9,"rme":0.9687356026280106,"sem":2.0714362437373164e-9,"variance":3.904671781800392e-16}},{"name":"Manipulating private properties using underscore(_)","hz":758524947.1914302,"cycles":7,"stats":{"deviation":8.608424850937485e-11,"mean":1.3183482016019024e-9,"moe":1.7785190002300505e-11,"rme":1.3490510307284542,"sem":9.074076531785973e-12,"variance":7.410497841423805e-21}},{"name":"Manipulating private properties using Symbol","hz":771464231.9967307,"cycles":7,"stats":{"deviation":5.40273901745443e-11,"mean":1.296236375614933e-9,"moe":1.1288304722276174e-11,"rme":0.8708523333115855,"sem":5.759339144018456e-12,"variance":2.918958889072446e-21}},{"name":"Manipulating private properties using PrivateSymbol","hz":32524223.84645274,"cycles":6,"stats":{"deviation":3.1601964073822656e-9,"mean":3.074631403107457e-8,"moe":6.718319963813013e-10,"rme":2.185081423751467,"sem":3.427714267251537e-10,"variance":9.986841333231778e-18}}]}-->
