## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,617,475|93|
|Adding property in the object creation - small object|1,603,512|92|
|Adding property after the function creation - small class|142,463|81|
|Adding property in the function creation - small class|141,658|82|
|Adding property after the class creation - small class|117,606|76|
|Adding property in the class creation - small class|117,660|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Adding property after object creation - small object","hz":1617474.7081425535,"cycles":5,"stats":{"deviation":8.840259710661802e-9,"mean":6.182476887990181e-7,"moe":1.7967167686102597e-9,"rme":0.29061439309227116,"sem":9.166922288827855e-10,"variance":7.81501917519503e-17}},{"name":"Adding property in the object creation - small object","hz":1603512.217364074,"cycles":6,"stats":{"deviation":5.143308855277024e-8,"mean":6.236310451340653e-7,"moe":1.0510049516271996e-8,"rme":1.6852992804443523,"sem":5.362270161363263e-9,"variance":2.6453625980771046e-15}},{"name":"Adding property after the function creation - small class","hz":142463.4368274372,"cycles":3,"stats":{"deviation":8.066305993551659e-7,"mean":0.000007019344908906542,"moe":1.75666219415125e-7,"rme":2.5026013352361383,"sem":8.962562215057398e-8,"variance":6.506529238160742e-13}},{"name":"Adding property in the function creation - small class","hz":141657.51422365877,"cycles":4,"stats":{"deviation":7.652171647634481e-7,"mean":0.000007059279597559013,"moe":1.656280345956499e-7,"rme":2.346245566656992,"sem":8.450409928349485e-8,"variance":5.8555730924861e-13}},{"name":"Adding property after the class creation - small class","hz":117606.09483078087,"cycles":4,"stats":{"deviation":0.0000012890306827403455,"mean":0.00000850296067936669,"moe":2.8980944166129663e-7,"rme":3.4083356678874113,"sem":1.478619600312738e-7,"variance":1.6616001010460411e-12}},{"name":"Adding property in the class creation - small class","hz":117659.95022087032,"cycles":3,"stats":{"deviation":0.0000010487544618830542,"mean":0.00000849906869859122,"moe":2.312684273969342e-7,"rme":2.721103165518224,"sem":1.1799409561068072e-7,"variance":1.0998859213196145e-12}}]}-->
