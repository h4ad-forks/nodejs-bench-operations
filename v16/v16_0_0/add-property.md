## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|709,530,058|97|
|Using dot notation|707,076,596|97|
|Using define property (writable)|3,040,886|96|
|Using define property initialized (writable)|3,816,550|95|
|Using define property (getter)|1,599,571|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:59:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Directly in the object","hz":709530058.071877,"cycles":9,"stats":{"deviation":9.479967196323618e-12,"mean":1.409383561166478e-9,"moe":1.88658787432242e-12,"rme":0.13385908040256855,"sem":9.625448338379693e-13,"variance":8.986977804337186e-23}},{"name":"Using dot notation","hz":707076596.1982301,"cycles":7,"stats":{"deviation":4.815331598155712e-11,"mean":1.4142739349269146e-9,"moe":9.582887805186922e-12,"rme":0.6775835691041097,"sem":4.889228472034144e-12,"variance":2.3187418400196847e-21}},{"name":"Using define property (writable)","hz":3040885.54883185,"cycles":6,"stats":{"deviation":3.4171291031820686e-9,"mean":3.288515743001732e-7,"moe":6.835681861875126e-10,"rme":0.20786526190188062,"sem":3.4875927866709826e-10,"variance":1.1676771307813888e-17}},{"name":"Using define property initialized (writable)","hz":3816549.8640695135,"cycles":9,"stats":{"deviation":4.4936030118829206e-9,"mean":2.620167522018746e-7,"moe":9.036265249590787e-10,"rme":0.3448735691002179,"sem":4.610339413056524e-10,"variance":2.019246802840326e-17}},{"name":"Using define property (getter)","hz":1599571.4516451752,"cycles":4,"stats":{"deviation":4.937764481185822e-8,"mean":6.251674465504432e-7,"moe":1.0316802260924241e-8,"rme":1.6502462368842816,"sem":5.263674622920532e-9,"variance":2.438151807166029e-15}}]}-->
