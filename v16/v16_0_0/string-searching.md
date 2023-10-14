## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,192,191|97|
|Using indexof|580,122,613|96|
|Using RegExp.test|9,459,159|97|
|Using RegExp.text with cached regex pattern|10,034,585|98|
|Using new RegExp.test|2,581,251|95|
|Using new RegExp.test with cached regex pattern|3,052,740|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:51:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using includes","hz":10192191.491773639,"cycles":6,"stats":{"deviation":1.2035832614863126e-9,"mean":9.81143261296772e-8,"moe":2.395225151979517e-10,"rme":0.24412593414887854,"sem":1.2220536489691413e-10,"variance":1.4486126673300294e-18}},{"name":"Using indexof","hz":580122612.5806806,"cycles":9,"stats":{"deviation":5.56002309306514e-11,"mean":1.7237735235858006e-9,"moe":1.1122362621148874e-11,"rme":0.6452334061850591,"sem":5.674674806708609e-12,"variance":3.0913856795417642e-21}},{"name":"Using RegExp.test","hz":9459159.119461875,"cycles":6,"stats":{"deviation":4.478690406383676e-10,"mean":1.0571764227356493e-7,"moe":8.912945412727095e-11,"rme":0.08430896888206339,"sem":4.5474211289423957e-11,"variance":2.0058667756233174e-19}},{"name":"Using RegExp.text with cached regex pattern","hz":10034585.299107278,"cycles":5,"stats":{"deviation":1.9867706280545894e-9,"mean":9.965533902920378e-8,"moe":3.9336051545270374e-10,"rme":0.39472096456109623,"sem":2.0069414053709374e-10,"variance":3.947257528500428e-18}},{"name":"Using new RegExp.test","hz":2581251.2222448997,"cycles":4,"stats":{"deviation":1.556481831326517e-8,"mean":3.874090175268975e-7,"moe":3.1299566621355308e-9,"rme":0.8079204459710906,"sem":1.5969166643548626e-9,"variance":2.4226356912495477e-16}},{"name":"Using new RegExp.test with cached regex pattern","hz":3052740.0524285007,"cycles":6,"stats":{"deviation":2.885152676772611e-9,"mean":3.275745667255504e-7,"moe":5.771507375296318e-10,"rme":0.1761891172745356,"sem":2.9446466200491423e-10,"variance":8.324105968288163e-18}}]}-->
