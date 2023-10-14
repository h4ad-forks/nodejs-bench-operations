## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,984|86|
|Intl.DateTimeFormat().format(new Date())|8,226|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,894|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,498|86|
|Reusing Intl.DateTimeFormat()|387,941|79|
|Date.toLocaleDateString()|483,485|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,287|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:11:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":7984.3840083905725,"cycles":3,"stats":{"deviation":0.000059422981349400696,"mean":0.0001252444770879165,"moe":0.000012559179947007268,"rme":10.02773155273844,"sem":0.000006407744870922076,"variance":3.5310907124512233e-9}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":8226.187801705506,"cycles":4,"stats":{"deviation":0.00001758094171903582,"mean":0.00012156299176547777,"moe":0.000003852593717638157,"rme":3.1692159444962273,"sem":0.0000019656090396113047,"variance":3.090895117281341e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":8893.779114259023,"cycles":5,"stats":{"deviation":0.00012990672761494068,"mean":0.00011243814211629586,"moe":0.00002940066018994752,"rme":26.1482977542782,"sem":0.000015000336831605878,"variance":1.6875757879622395e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":10498.06036591289,"cycles":3,"stats":{"deviation":0.000012843584461084302,"mean":0.00009525569154155289,"moe":0.0000027145202874101664,"rme":2.8497197841727133,"sem":0.0000013849593303113093,"variance":1.6495766180900614e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":387941.21163155563,"cycles":3,"stats":{"deviation":0.000004295259979132224,"mean":0.0000025777101530263374,"moe":9.471788266352726e-7,"rme":36.744970163664284,"sem":4.832545033853432e-7,"variance":1.8449258288334954e-11}},{"name":"Date.toLocaleDateString()","hz":483485.0875760701,"cycles":3,"stats":{"deviation":2.9412508223423646e-8,"mean":0.000002068316119145377,"moe":5.823379524616627e-9,"rme":0.28155171594479633,"sem":2.971112002355422e-9,"variance":8.650956399929636e-16}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":10287.134875469037,"cycles":4,"stats":{"deviation":0.00004301520410584376,"mean":0.00009720879643413885,"moe":0.000009091359547344322,"rme":9.352404186491418,"sem":0.000004638448748645063,"variance":1.8503077842673975e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
