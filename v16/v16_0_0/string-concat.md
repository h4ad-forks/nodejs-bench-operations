## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|708,648,375|95|
|Using backtick (`)|690,924,832|92|
|Using array.join|6,302,797|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:49:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using + sign","hz":708648374.6431603,"cycles":7,"stats":{"deviation":1.4630253900870436e-11,"mean":1.4111370826237337e-9,"moe":2.94202346240928e-12,"rme":0.2084860144798379,"sem":1.501032378780245e-12,"variance":2.140443292039346e-22}},{"name":"Using backtick (`)","hz":690924831.5649358,"cycles":6,"stats":{"deviation":1.9342461397584168e-10,"mean":1.4473354470919983e-9,"moe":3.9525183646440734e-11,"rme":2.730893085349022,"sem":2.0165910023694253e-11,"variance":3.741308129170337e-20}},{"name":"Using array.join","hz":6302797.31389719,"cycles":6,"stats":{"deviation":6.103528349399969e-10,"mean":1.5865971095010082e-7,"moe":1.220959957075728e-10,"rme":0.07695463137832927,"sem":6.229387536100653e-11,"variance":3.725305831192911e-19}}]}-->
