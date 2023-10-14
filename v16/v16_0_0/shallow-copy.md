## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,716,202|93|
|{ ...object, __proto__: null }|14,694,866|95|
|{ ...object, newProp: true }|484,093|84|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|139,736|94|
|loop + object.keys starting with {}|361,263|96|
|loop + object.keys starting with { __proto__: null }|500,902|97|
|loop + object.keys starting with { randomProp: true }|362,311|94|
|object.keys + reduce(FN, {})|368,581|94|
|object.keys + reduce(FN, { __proto__: null })|527,966|97|
|object.keys + reduce(FN, { newProp: true })|394,160|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:41:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"{ ...object }","hz":14716201.814385938,"cycles":6,"stats":{"deviation":1.429155313652671e-9,"mean":6.795231627106678e-8,"moe":2.904651448069254e-10,"rme":0.42745436910235496,"sem":1.4819650245251298e-10,"variance":2.0424849105416643e-18}},{"name":"{ ...object, __proto__: null }","hz":14694865.810501888,"cycles":5,"stats":{"deviation":4.476672351383089e-9,"mean":6.805097868163833e-8,"moe":9.0022190869185e-10,"rme":1.3228640147900619,"sem":4.592968921897194e-10,"variance":2.0040595341637794e-17}},{"name":"{ ...object, newProp: true }","hz":484093.4604622094,"cycles":3,"stats":{"deviation":2.681871788314857e-7,"mean":0.0000020657168122973738,"moe":5.735277554589062e-8,"rme":2.776410358112257,"sem":2.9261620176474807e-8,"variance":7.19243628895913e-14}},{"name":"structuredClone","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"JSON.parse + JSON.stringify","hz":139736.0965172353,"cycles":6,"stats":{"deviation":4.7607536112819425e-8,"mean":0.000007156347035045868,"moe":9.624271148843766e-9,"rme":0.13448580821628756,"sem":4.910342422879472e-9,"variance":2.2664774947334054e-15}},{"name":"loop + object.keys starting with {}","hz":361263.153013392,"cycles":4,"stats":{"deviation":3.430317195949241e-8,"mean":0.0000027680653054670375,"moe":6.862063541875843e-9,"rme":0.24790107113163112,"sem":3.501052827487675e-9,"variance":1.1767076064825065e-15}},{"name":"loop + object.keys starting with { __proto__: null }","hz":500901.7476193403,"cycles":4,"stats":{"deviation":5.135859748859614e-8,"mean":0.0000019963995030018318,"moe":1.0220763981310695e-8,"rme":0.5119598540243334,"sem":5.214675500668722e-9,"variance":2.6377055359956344e-15}},{"name":"loop + object.keys starting with { randomProp: true }","hz":362311.30441091146,"cycles":7,"stats":{"deviation":8.906786032725161e-8,"mean":0.0000027600574087135322,"moe":1.8005830766066247e-8,"rme":0.6523716031855583,"sem":9.1866483500338e-9,"variance":7.933083743274802e-15}},{"name":"object.keys + reduce(FN, {})","hz":368580.58739861276,"cycles":6,"stats":{"deviation":4.5332575772026836e-8,"mean":0.0000027131108750405226,"moe":9.1643684325854e-9,"rme":0.33778083000196313,"sem":4.67569817989051e-9,"variance":2.0550424261265544e-15}},{"name":"object.keys + reduce(FN, { __proto__: null })","hz":527966.4191502299,"cycles":4,"stats":{"deviation":3.4765842314778716e-8,"mean":0.0000018940598563247932,"moe":6.918675475702332e-9,"rme":0.3652828316169074,"sem":3.5299364671950675e-9,"variance":1.2086637918560585e-15}},{"name":"object.keys + reduce(FN, { newProp: true })","hz":394160.1512408865,"cycles":6,"stats":{"deviation":3.039902114151045e-8,"mean":0.000002537039822142907,"moe":6.112992572690656e-9,"rme":0.24094980769861649,"sem":3.1188737615768654e-9,"variance":9.241004863619992e-16}}]}-->
