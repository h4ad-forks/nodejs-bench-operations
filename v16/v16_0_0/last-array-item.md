## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|631,787,987|84|
|Length = 10_000 - Array[length - 1]|625,829,853|81|
|Length = 1_000_000 - Array[length - 1]|644,353,599|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:21:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"Length = 10_000 - Array.at","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"Length = 1_000_000 - Array.at","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"Length = 100 - Array[length - 1]","hz":631787986.8438523,"cycles":6,"stats":{"deviation":8.498065565463225e-11,"mean":1.5828094563740922e-9,"moe":1.81734134000687e-11,"rme":1.1481744266110494,"sem":9.272149693912603e-12,"variance":7.22171183549118e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":625829852.7630394,"cycles":5,"stats":{"deviation":1.0185215741844518e-10,"mean":1.597878393919688e-9,"moe":2.2181136504461397e-11,"rme":1.388161739270395,"sem":1.1316906379827243e-11,"variance":1.0373861970791738e-20}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":644353599.283094,"cycles":6,"stats":{"deviation":8.84946954274638e-11,"mean":1.5519429100925285e-9,"moe":1.8813250897730217e-11,"rme":1.2122385930168365,"sem":9.598597396801132e-12,"variance":7.831311118799582e-21}}]}-->
