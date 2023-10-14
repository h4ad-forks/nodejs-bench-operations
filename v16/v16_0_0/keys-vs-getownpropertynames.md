## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,725,332|91|
|Using Object.getOwnPropertyNames()|50,289,176|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:20:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":55725332.352198415,"cycles":9,"stats":{"deviation":4.34242175530079e-10,"mean":1.7945159908239635e-8,"moe":8.922105966237061e-11,"rme":0.49718732025009255,"sem":4.552094880733195e-11,"variance":1.8856626700909594e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":50289176.49433634,"cycles":6,"stats":{"deviation":3.3903827436479114e-9,"mean":1.9884994539781775e-8,"moe":7.165649719985276e-10,"rme":3.603546234649313,"sem":3.655943734686365e-10,"variance":1.149469514842554e-17}}]}-->
