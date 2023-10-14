## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|156,541|87|
|Sort using first char|711,015|87|
|Sort using localeCompare|389,372|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Sort using default","hz":156541.2439845462,"cycles":7,"stats":{"deviation":3.734493723039192e-7,"mean":0.000006388092840879177,"moe":7.847443162217027e-8,"rme":1.228448514711474,"sem":4.0037975317433815e-8,"variance":1.3946443367419125e-13}},{"name":"Sort using first char","hz":711014.590295143,"cycles":6,"stats":{"deviation":1.1750855004757947e-7,"mean":0.000001406440899595181,"moe":2.469254833349836e-8,"rme":1.7556762136685353,"sem":1.259823894566243e-8,"variance":1.380825933428449e-14}},{"name":"Sort using localeCompare","hz":389371.63122535823,"cycles":5,"stats":{"deviation":1.5828988931261018e-7,"mean":0.0000025682405183268883,"moe":3.28862416311704e-8,"rme":1.2804969548800105,"sem":1.6778694709780816e-8,"variance":2.5055689058598386e-14}}]}-->
