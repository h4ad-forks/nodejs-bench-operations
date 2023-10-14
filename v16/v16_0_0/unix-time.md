## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,174,367|89|
|Date.now()|13,632,788|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:54:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().getTime()","hz":7174367.244362136,"cycles":5,"stats":{"deviation":7.366159949451818e-9,"mean":1.393851145250244e-7,"moe":1.5303903303205099e-9,"rme":1.0979582256940017,"sem":7.808113930206683e-10,"variance":5.4260312400908006e-17}},{"name":"Date.now()","hz":13632788.496374592,"cycles":4,"stats":{"deviation":2.4493833102031975e-9,"mean":7.335256468373532e-8,"moe":4.925507934365226e-10,"rme":0.6714840790641603,"sem":2.5130142522271563e-10,"variance":5.9994786003019724e-18}}]}-->
