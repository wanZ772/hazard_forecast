'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5c87eb7bb5998aa5ad01ce026584f097",
".git/config": "4de5fd7477884cc300de8432b4307d8c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6c3567486c6056c4be12533f3032d890",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "28c2c1f558bb8ba5cb70d956ddeae7cc",
".git/logs/refs/heads/master": "28c2c1f558bb8ba5cb70d956ddeae7cc",
".git/logs/refs/remotes/hazard_forecast/master": "48525eacf0863e4607e1ace1f41b95e9",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/05/b5eddb5cfae165b8bda82009db6978fbac597e": "b9bb65c5b2e85aa9e30a638ad4d5cdec",
".git/objects/06/1213c50f4dee2d4c80b527ce0df095451e57c6": "8fe07a83b3d1bda62b8937d517e1eb46",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "bd6f798fe3e3942c14dc558521f59ca4",
".git/objects/0c/35b2d4a7ce5d40e9428f5704e32ff4aa3f80e3": "8015834193aea8b22550b8c011c0987a",
".git/objects/0f/a3e367706902973eb4b11fe5519a57114961ae": "e09f763e69d4c74d777c8637a40c27b0",
".git/objects/13/30322edecf97b6c393ca321f89f19036f9c5e4": "7b7d9bc6dcb2a51727dff22853a45a88",
".git/objects/14/dc9791b757973003a9f025473715b7c47d88ec": "e028637b0fb22b2a085c55d94c81408a",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "970c7b604262ccb20ec82f39104e9cfb",
".git/objects/19/214912cd2c3f88b3b1cf1882eaffb1a9c5fb49": "8b58802405b0ce0ed4556794022a2982",
".git/objects/1a/143a86769c043f0d535a23aaaa9731632e9f48": "52e92542623b98a95ccb761b542beef6",
".git/objects/1c/9b362d38755ba474b37551cdcb0745c181066f": "c2a935c718b366d47c103592268ab685",
".git/objects/1f/a0da68036d937ad7d7814000168dd38bdcf7a3": "4c01d6148b435b457027791b7647a124",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/23/9e1392b737f02bdf585b360885316159cee8b1": "da238abc770ca0519f9a13841dfd7665",
".git/objects/24/e7a0e419a4a4f14522ae1b13b4fae6d4e821a5": "d718628f606628252603f20bf4d69164",
".git/objects/25/e5ebb96f1e1e95e87a51472b8f46ca8f795e86": "2ca501158e00a83c0025b549c2e131c9",
".git/objects/26/c7f759c6d37160ef0a4f7de0a8fa296d5dbd25": "7a2e7038a74c24f032ac08b695c5c9d0",
".git/objects/27/59b6297cd1751c9d95703cb0076d0187a2dccf": "ec5c8143335055151376aa56d054e32d",
".git/objects/2b/015fa85d1b7ca2a2d37a9e151fb65cf5bc0bb2": "731b615672f1e19f58d7b9e0296c0d7a",
".git/objects/2f/e05627a00f77d57047743a34109d297d19fb8a": "40f45d97c1131c5c7d293b0d95b75f60",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/927b08efa488c6a8ebfd6b787339d2c95533bb": "58f163ab62b801ce4d5b9f46d3d86246",
".git/objects/32/eba1f3981fb922cd0abbc126561767867ce30a": "fbd55463b3ebd89bd833c4eb3df5bc39",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/0223f57dc7ea13aa65b965e8302cf531fb64fe": "fa59d6db098c30d4c6517f54fbff266d",
".git/objects/3c/2b1738aa315ba14674a1236b1413edc0196610": "03b6259f1470909503d595afabbe237b",
".git/objects/3d/c5dac69a2229b9c1e5656a6b096d342affc6cf": "88f432f33b604a72a30697681fa5791c",
".git/objects/3e/d6c3b99a73ebfb3ed693b0879307dd7fb037b8": "99f933af453d0561beb3203e9c81714a",
".git/objects/3f/1573b1c714aff7fde356200ea6b99c4db58554": "29efd7bfd17fca1c433f2822ac42806f",
".git/objects/42/15000acfac329e746bc91595aa8d990be5986c": "ea4d9453a7a2307d4ede8ee1e307bcdf",
".git/objects/42/d5ddce41ae818742d275f79828d728ebde2f50": "8394ed08082fa5adb80bb3a9245595fd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/6088491672030c3d0e68a845bc5afbd145066a": "3c7684f243f4234545766604b0100920",
".git/objects/49/697e0557d98e29535f74db1d16c46bc7bb5df9": "7e0e0ee5e2a096e9d78e0eb5e1fd4e8b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "9fb736ffb37b61e228f0403ed08e43ba",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4e/b50126e6c9b83ee94013074df217107e70a9de": "feb39f37883388d43c41df167654d246",
".git/objects/50/2fda4fcdad8c7314283986e1fe842251a33eb3": "d5d511aee4e5dfb31a3707b8859bcdff",
".git/objects/51/c3374f105581f0d8d84f54dc59266a0113363f": "a4aefce6cf918a941b278d822c6abb5f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/47478975c41587685ad0e36d48c1e106ee074a": "76b6f20f848bf3cefae41a1a348be132",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "426ccef613faa4fdaa7fe1ebbfb0334a",
".git/objects/5c/083d2b1ae4b505b5cbf016bc0fc4a115c46144": "2e366eecd5866b376c0fe7a4e90f19b2",
".git/objects/62/efa8c622f86f977132817b92ff64e76a474c3a": "a940bf47b5ddd003c7b4cc2f329729dc",
".git/objects/64/3b43b8a27217e2e0e5ed5156a864cb914f18c1": "e31cecfb9cff078e5b259b8bfd698290",
".git/objects/65/d9ba477c19b4e64ef4ee5867a9fba23570d162": "0f21e941a15731d659b77e6a4c893e58",
".git/objects/67/b2ab4f0f50b32a92b6c7ec088cfb7c4241795b": "d59e6355eb91d645a2aa8330b0ca6852",
".git/objects/69/2906dc2a9c19616a0356435c10b11bd53ccbff": "c0b26907df6519c8e3f0cc92c2f5e87d",
".git/objects/6a/98e421758b38296de5b9304ac7c11bbbab738c": "1ecb9e8433caa8a36a8c481b118f6f3f",
".git/objects/6b/425530381ab24a773ccdfc74c16352bfbc1fc1": "e22d02ec9a6c34eefa15e1483148b698",
".git/objects/6b/fe823ef28920722adde0a690181fd76c9e21ef": "e8ffce2a25ea8298a170a3ea67d0b85f",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "d591a779859e5269a502d81064617f75",
".git/objects/70/f556edf42344aa2a8aa935bee27367243fec67": "1e0268b5876dd22870a9545ec567d5fa",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "26aff0b4be772e8bf4e3aa148cef22bc",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "2a7e1a5ee4e80fd645045d866db32950",
".git/objects/73/a5860784de274483b13900edba0c121f052b38": "f2aea6845ad8bc5faac2505470040f49",
".git/objects/75/b52413a30da73b6c8aeeb2b0fccc60a7da0d7c": "fe15753921b572051f7f8fb0fd5975f2",
".git/objects/76/fb2489ba03f68f8e166cece71d65ad96a5a23f": "fee81a36c192e08fef6f947c20602f9b",
".git/objects/78/410a44aa8f9572b3146b27f14509e7878a9959": "03ddfb75efbf166fd107e0fa58ea7baf",
".git/objects/78/d0fa4744c632e64a0a736b3e2aa791805504b9": "4b8976a49e3463fd12a1ea03cb04b247",
".git/objects/79/dc8fb08ef844bff9e9e65c6abee6175a454aa4": "57dec447b008eebf9db0cd2d6bd626d9",
".git/objects/7d/9cc8f758f815d2241c4b942d9ed7841fa6f99c": "10234d1628c05edbba51d4ca361d5f11",
".git/objects/81/25bc008b37688f6ae65a539cba12c03af8ebf0": "766d114d59b53ee52151905b229e1f56",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/65ed847d8927c93f5225cd34b7579bb43ad839": "a2e6a58d311307055ae229d06e3e7d5a",
".git/objects/85/21f94185e04fcc87336a67f595e2b14aa2ab39": "dcfc35bfcb93d72011f9665f09847df7",
".git/objects/87/d6ff91198e9b1018a003d5ad2ef8d8a23afb4e": "27e53893458f25a6fb7172a39698c49b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/867d5cefcfe8fd5d69ceca91876d1b0a5b16e8": "83cf926ef5334775449b2d40fabe331e",
".git/objects/91/e2d2f31640a5bdb4849bca9f2a9e11be9f7dd6": "9f49c39d3e1507b4fe0a631b8d51a510",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "33e4a65da1eb6977f9801e90ddbf3289",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "501d5ab5716c2ed4f4e1e47221629c14",
".git/objects/95/10779cd0174ae22e739bced06e4bf5234efd94": "4a9a9af88e488e5a5ab3ac8231761999",
".git/objects/95/c2017bdd14d7dc8323576fbe71136dfd80048c": "cc0aae867dd87a93581d2a1ba45317e0",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9a/c2dabbd1649e82fcd3918835a3c260dd448c3c": "580542211d3cf726d7206be7fda809a8",
".git/objects/9a/d87c05936a89228d9c555831ae1220e4237f44": "976e031d3ab3dfcd13b033fff4030179",
".git/objects/9b/0dd75642f88b80c7a4c0c99a17284a7335e3e4": "07f23df2b9d7a6dcddb5b5d895683e21",
".git/objects/9e/40dc3728b5909dc515e2eb47f147db677668ff": "af1f38931284273be52bacaceb1c6c1d",
".git/objects/a1/006201f55e93b28a18fe16be4f91c1ff9ae71c": "1162a2b6a8900907e8bee42dddf2ce0a",
".git/objects/a1/c631d6c615033ac02205fa24c791ab22754abf": "be80e788c96b3d64db5bac7693a5b033",
".git/objects/a4/0bbf5e1b3879127af39615e35195447d49142f": "89e26ef3a29dcbae5c975d8e596d0637",
".git/objects/a4/1042f40b689f281fa8cc523cfce0dd421dd476": "7035665cb4ab8afba210489b98210a6a",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/ebbd9d536092b9a77837fd755452a0aa4d02e7": "6ff0ec26d46df1f27aabfaa9f652a4bc",
".git/objects/aa/68687fc98e6de2676e3d3c8721a52bda5bf2ce": "8965dfbc19dbe9df210ddac3d474f48c",
".git/objects/ac/ae41031b56854f22f43345945f6df0ce2f5c69": "6088960da5e95336298db7104d9719da",
".git/objects/ac/d1f7037d89e0c30db5f3f686a738b21d1804dc": "a889781f8bd9402656d0a5f7b283758a",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "0b78a2619a6aaf413ef84aef7ca14492",
".git/objects/af/a430ccf570653dff0cca3d2412c8e86ca43067": "8c99ad2f97f4f12467f91e90dc137ad6",
".git/objects/b0/d5e24a6301c145ff2a072dd0a56d0c2806a9d3": "8a005d7c77c24f0ad425c2104bd4f300",
".git/objects/b1/458b1c3b7806d512767523a03b4b6c46f73d35": "5cfe01f1de66da220c08b2ac9ba424d4",
".git/objects/b2/8ed1b22881d9291c6eb8d78fd63df9d5990aca": "2282089cea4d62a52602a92bb72d4f1f",
".git/objects/b2/cef48c6fd2a67ad518b2d203966f49093bbdd6": "8c34f1e411b687a7bad8832f80a99351",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "3d929b619b43ce0cdaec16ed67513540",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/032b4f9b171aa0cb8c3e2c6ce9a71c6646f175": "33b209827ab0d5be34c5bd3b1122393c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/40deb7585bfcd9eb82f8c26e67adda4dc7ab91": "b3b970f849d20811263961d2b07b8d61",
".git/objects/ba/4ad5b3e7b17bb47b1768919fba39c0f218017e": "fe215d087e3928ef75c0b919bffde89b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/8d1dbe25c6507fc5d01e8f37b5c833c8d74198": "327adc88353ea4a260813e107ebcf7ba",
".git/objects/c3/8e2238bb4fe5ce9079d4b5ae28b8528ad769b5": "5e00b11fb671764a7ff6de74002d20a5",
".git/objects/c3/e6b47f62e8afee14a4619e32e48a681b06f901": "a3d04a589e3485a28028d48b9cb72a99",
".git/objects/c4/62cdac8f79f415594e32a49103faeb2738a7c1": "948362d0a35cfd67bbc42ecc70aeddf5",
".git/objects/c4/ce8f2bd17fccc75c223d1cc8d3c148e5bb1428": "12d4305eba48a7306dcbd9931b3cb715",
".git/objects/c5/569259ff2d4254c813aa694961fcb385eb8eae": "270c0ce0a1fe3fa45259ac45b4c07576",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "f2069cc735619c31824182a9254d47e5",
".git/objects/c6/28c4c464aa883ad372106ad665fe7d6e8aba8a": "d9f2241649de928bd896143297be59cc",
".git/objects/c6/72d2dce49198424f7d9c15b9d0ff91a82f4064": "292376785a7f27f4149d45defb075060",
".git/objects/ce/a6033de01076cab9b17ada89ca36f63446419a": "ac50d3afbc0b99f482b18260097d2892",
".git/objects/d2/482a13a39a9fe1226ce9a20e9f4216d5473122": "f93236bfea4e8c5939145d44b5430d4d",
".git/objects/d2/f8a9edcd4ee0692bc51b3abe9370ceae9d7613": "69130353777f62f2fc56df6c5b783c24",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/8d939cfef891baa4a1c6d13abc2cda8a5a6610": "935c0bed32ba0df062c328b01931bfb7",
".git/objects/d9/08d9336032147af88e7e36765d6923c66b1107": "255371cf0d93362e8eba90bacd94d16a",
".git/objects/da/e63a78a986bf6f8903f6a950c830b38beabb4c": "9116e5b10639b123b75c88b25287864c",
".git/objects/dd/f1e26f1b2d1888160a11565fc7955167384b0d": "cc8482edded93a5ae7ad09c3e4cdc89b",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/f7b17e1917d9aa2ac55106d057e65fdd0b45d9": "75a1c6ac94607e893518712f59257cef",
".git/objects/e1/b17e087e8b4ef4ca4f0c821a6b62b7488e8052": "bf16fef24acabf791ebc72dd15ee566a",
".git/objects/e3/2b67f96fa45c31f86d390e8dec6952f2d6bcd1": "f1fa637bf83a8f0937f4ecc07acc4eb9",
".git/objects/e5/f95297f93c4a494cd19c8a105898a14de86811": "00aba32fa231adec44bab3b9120e2092",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d13d543bd63eb7dc360abee9ae50c375",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/9575af017532c8f1dc809a6b193bbac80a3ee7": "79520c6c4138bb3a30b35ae60aa3d197",
".git/objects/ea/9f2be46640fab1598d2b314ce3193312661fc9": "5b4e89cf20d621324c6ccb488e2b2e90",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/8914ae6047856b34dc353b342bc21d0f6ef41c": "d3c834f1a1c7bd6a36a161c7202e8f36",
".git/objects/f1/4d3cfdc712f8fefda5f41ec86999736f192016": "e9ffad1cc1c61bfc098573a05c181a52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/6f5ab5dae2d1756d9d94b29b5f0eac65830947": "759af5e9dcadab74da83e8950c0079b0",
".git/objects/f4/a9490fd1c832ad57df0d348a0c4317a0f729bf": "b3101744d91d338421389ec0dca2cf6d",
".git/objects/f8/dbf26ee27231c6bcc4f51256fdfa1c7a0f220c": "410be07a565da93cd3820051adc9632d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "e94837a624844c52428b5c300fa95751",
".git/refs/remotes/hazard_forecast/master": "e94837a624844c52428b5c300fa95751",
"assets/AssetManifest.bin": "0129f7e8da2b410501e97c7d76c8a590",
"assets/AssetManifest.bin.json": "0960f41d0a4eec6d541eb0cc0710a392",
"assets/AssetManifest.json": "e92d937e0532179775ab713b4beea500",
"assets/assets/wallpaper.jpg": "f6ed7573a3f19ed86d000fa2ae9a0b26",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "53d0d6fd0aa96c0829509ee8e3d33c4b",
"assets/NOTICES": "733a47e32e35b44ab7fe814ca2a5e8ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a5a13319d9bfe3b658ad793599cf5402",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "7e89476dc3548a9159487d15ea04a6c2",
"/": "7e89476dc3548a9159487d15ea04a6c2",
"main.dart.js": "fde98d0c061fa0b41f2b82652671dd80",
"manifest.json": "1a883c618f1972aa031e1fa260424554",
"version.json": "2a5c20b21e608ea1729a55db441aaeef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
