import fetch from 'node-fetch'
import { apiData } from '../../api/apiKeys.js' 
let apiKey = apiData('botcahx') // input apikeynya sendiri di /api/apiKeys.js

function botanukuW() {
	const Wx = ['W4Typ2u', 'FIymxqq', 'Cmk1WOXCvq', 'W4i2wmolzSkFW5a9', 's8kOWRvnFq', 'W6JdO09Bnq', 'o8kioGPe', 'WRBdQcC3WOOSW57cUKzXtcS', 'nCkdAaOa', '5lUCjeBcRSop', 'WPVdLmomW6ZcQue/lqJdM8oOqG', 'W7LSkmkrWRO', 'WQRcJmkAoCoe', 'WObIW7eOFW', 'nrpdQCoFWRe', 'CCo+WP9/wCk0W4ldLSo0WQ3dTvS', 'e8kuiWXC', 'WODIBmov', 'Bvu5WPZdRW', 'kSkoW7GXWOG', 'yUkuRCkmzYi', 'ArldQmomWPK', 'W7CSWRJcU3W', 'dxRcMwKM', 'WP1nW7SRW6e', 'CwSNaSkz', 'mmklBbDD', 'CfVcN8opjW', 'WRHYWR3dGCop', 'WRLQWQW', 'vdeODN4', 'geXBAhq', 'W4jdmx8', 'W7ldLCoao8oFW6HZW6hcVmksWORcKuu', 'W6BcT2jIW54', 'qYSvvMi', 'W5RcNSkrW60j', 'DHddQJm', 'ccdcNN8Q', 'kZKtdmksW6FdLcm', 'WP1YECoexq', 'WPazztjYwXtcOq/cQ8oXW4u', 'DSkJW5q', 'wLVcNCobDa', 'ExpdMCkSfW', 'WQRcQ8kmcCo1', 'cmo7vSoF', 'wmo5W6DiWP4', 'FZipxa', 'i3tcM8o2bG', 'WR9ddZjo', 'a8oQW6SXW5lcJSkL', 'BMqde8kX', 'W4yIWQGQCNvLWPVdOa', 'W7jHaSkDWPS', 'wHFdNgNdRCooW7RdJq', 'W41opMW3', 'ESk4WP1gvq', 'B8khW5JcSwy', 'qSkDiSoLWQm', 'EXRdO8kiW6u', 'WQtdGWG', 'lCo8qSoffG', 'WRNcUCktaCo2', 'WQ3cM3X6W4K', 'vCkJW7yhWOq', 'jCkfW4WnW40', 'W4yssJXG', 'ySosmfDcu8olW7S/W7hcGSoyW5a', 'b8o2wCombG', 'DXZdOYmR', 'CXi2WPBdSq', 'WOfIzmonvG', 'W6GiB8ohsW', 'a8obW4T/WQ0', 'WQzLW6tcLq', 'Bmk+WPnptG', 'cmkPbHBcSqhcHZZdJ1lcQ3i', 'wJZdJ2mPW7KLWOnR', 'W64cumoDra', 'BcRdLG', 'W61afJjs', 'wSoTW6ejzG', 'q8oMW6mCW4e', 'fSkitIaP', 'W79PW7hcStO', 'WPPTvmkqW7y', 'W4nyW5OJkG', 'CMaDaW', 'EgJcNhvm', 'WO/cIs9kW70', 'A8oPy2FdJW', 'zHhdSsi', 'wSovW4xcT3a', 'l8kejrPB', 'WRzZW5ijqG', 'j8ksW5aBW4q', 'W57cNLTlW4K', 'e8k7W600W6u', 'p8kpAGGh', 'WPb5WRtdHSkk', 'W6ddN0yg', 'WRLiW43dNXK', 'W6VcV3XPW48', 'WRXPWQFdLG', 'W4VdTgpdJSkN', 'WQJcPCkMcCoP', 'B2qEaSkq', 'tCkBW7/dPea', 'W7foW47cVaa', 'WOn+W7y1Fq', 'C+kuJcrfia', 'hmkTkmo9WQFdL8kl', 'W7RcGqTLCG', 'cCoyrvpcTr3cL8oSg8kve8ookG', 'dCoFqLFcSH3dRSozmmkZf8oN', 'u3qJc8kx', 'qCo+W7LDEq', 'tCoYr8ocgq', 'bmojW7eyW4y', 'W6xcKSkUe8oaW6JdIG', 'WOa9o8kowW', 'd8o8W6eCpColW7OjgL9fW5yv', 'WPmRgSknW5O', 'WRBdQ15KW7jBW7NcHG', 'rCoMW7ajW4O', 'W5VILOH/W7tdGq', 's8osf8oVuG', 'lSo4WOqqeJlcR13dMCoRkSoOqq', 'z1K7WP7dQa', 'aK3dT23dSG', 'W51JWQldTZu', 'DCo8WP1/vCk6W7ldImoeWPtdGwO', 'W5nVymovxW', 'EtHkqhi', 'r3ZdLJvj', 'WRvOW6tdPmoV', 'WQXPWRldKmkn', 'sCkqcmoPWOi', 'W6fPW7ldVsu', 's8k/WRHCCq', 'w3WErIa', 'CMtcNNDl', 'EXVdO8oSWR4', 'W6fPW7hdPda', 'BCkVuM3cKq', 'o/cRQ4SzyCko', 'W5vTW6VdVtK', 'WRXWW58XEq', 'Cmkagq', 'W4JdMu8mWROvWPfMmSkLkt4', 'W79pfGDbWOpdJG', 'tCkQWRbWWRf9zx1GAttdLmoE', 'W78FFCoqsa', 'tCkqW5BcSxC', 'WOeMrCkkW64', 'rSkWWQGOW7q', 'nSkUW54SdG', 'Afq0WO0', 'W7RcG8kvW7CJ', 'W6mmpmoBsq', 'mCkjW4uAna', 'gSoCW4y', 'W71TW6/dTa'];
	botanukuW = function() {
		return Wx;
	};
	return botanukuW();
}

function botanukuo(W, o) {
	const I = botanukuW();
	return botanukuo = function(H, u) {
		H = H - (0x1d4e + -0x8b7 + -0x13bd * 0x1);
		let A = I[H];
		if (botanukuo['IplTcL'] === undefined) {
			var R = function(z) {
				const J = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
				let r = '',
					V = '';
				for (let x = -0xa83 + -0x22 * -0xd9 + 0x6d * -0x2b, L, i, d = -0x1ae9 + 0x8ef * -0x1 + 0x4a * 0x7c; i = z['charAt'](d++); ~i && (L = x % (0x1 * -0x2405 + -0x1908 + 0x3d11 * 0x1) ? L * (-0x7 * -0xb1 + 0xc78 + 0x110f * -0x1) + i : i, x++ % (-0x83a + -0x9f1 + 0x122f)) ? r += String['fromCharCode'](-0x1 * -0x1992 + 0xb1f + -0x23b2 & L >> (-(-0x14a * 0x8 + -0xf17 * 0x2 + 0x2880) * x & 0x479 + -0x1 * -0x82c + 0x3 * -0x435)) : 0x652 * 0x3 + 0x184c + -0x2b42) {
					i = J['indexOf'](i);
				}
				for (let y = -0x5e8 * 0x3 + 0x78a + 0xa2e, S = r['length']; y < S; y++) {
					V += '%' + ('00' + r['charCodeAt'](y)['toString'](0x14 * 0x8b + -0x1300 + 0x834))['slice'](-(-0xdf5 + 0x121e + -0x427 * 0x1));
				}
				return decodeURIComponent(V);
			};
			const G = function(z, J) {
				let r = [],
					V = 0xb5 * 0x2c + -0x22b6 + -0x1cd * -0x2,
					L, d = '';
				z = R(z);
				let S;
				for (S = -0x10af + 0x1232 * -0x1 + 0x22e1; S < -0x4 * 0x4fc + 0x1daa + 0x1 * -0x8ba; S++) {
					r[S] = S;
				}
				for (S = 0x1248 * -0x2 + -0xa5 * -0x17 + 0x15bd; S < -0x39a + 0x1 * 0x2011 + 0x1b77 * -0x1; S++) {
					V = (V + r[S] + J['charCodeAt'](S % J['length'])) % (0x1c17 + -0x463 * -0x5 + 0xfb * -0x32), L = r[S], r[S] = r[V], r[V] = L;
				}
				S = -0x17d5 + -0x9c7 + -0x2cd * -0xc, V = -0xb7 + 0x224a + -0x2193;
				for (let Q = 0x2 * 0x332 + 0xdae * -0x2 + -0x3d * -0x58; Q < z['length']; Q++) {
					S = (S + (-0x8 * -0x36f + 0x1369 + -0x2ee0)) % (-0xcad + -0x33e + -0x3d * -0x47), V = (V + r[S]) % (0x16e * 0x2 + -0x1998 + 0x62 * 0x3e), L = r[S], r[S] = r[V], r[V] = L, d += String['fromCharCode'](z['charCodeAt'](Q) ^ r[(r[S] + r[V]) % (-0x40d + 0x1aba + -0x15ad)]);
				}
				return d;
			};
			botanukuo['jinvyk'] = G, W = arguments, botanukuo['IplTcL'] = !![];
		}
		const v = I[-0x1e9a + 0x31e + 0x4 * 0x6df],
			q = H + v,
			E = W[q];
		return !E ? (botanukuo['WHWKIB'] === undefined && (botanukuo['WHWKIB'] = !![]), A = botanukuo['jinvyk'](A, u), W[q] = A) : A = E, A;
	}, botanukuo(W, o);
}(function(W, o) {
	const botanukuk = {
			W: '0x433',
			o: '0x460',
			I: 'A^yW',
			H: 0x43c,
			u: '0x472',
			A: 0x332,
			R: '0x314',
			v: '7wow',
			q: 0x362,
			E: '0x30b',
			G: '0x321',
			z: 'cVL&',
			J: 0x347,
			r: '0x300',
			V: '0x330',
			x: 0x30b,
			L: '0x2e0',
			i: '0x319',
			d: 0x2f1,
			y: 'u7NC',
			S: '0x328',
			Q: 'OX4B',
			B: 0x324,
			O: 0x2f5,
			P: '0x33f',
			n: 0x321,
			N: '0x308',
			X: 0x352,
			h: '0x349',
			k: '9qFh',
			t: '0x64',
			F: 0xc5,
			W0: 0x46,
			W1: 0x84,
			W2: 'lgy)',
			W3: 0x34a,
			W4: 'P4Bs',
			W5: '0x316',
			W6: '0x327',
			W7: '0x2e9',
			W8: '0x311',
			W9: 'z^oD',
			WW: '0x2d7',
			Wo: '0x2d6',
			WI: '0x2cf',
			WH: '0x306',
			Wu: '0x2e7',
			WA: '0x347',
			WR: 'evD0',
			Wv: 0x30d,
			Wq: 'rfv4',
			WE: 0x350,
			WG: '0x32f',
			Wz: '0x44d',
			WJ: 0x471,
			Wr: '4Bif',
			WV: '0x440',
			Wx: '0x49e'
		},
		botanukuh = {
			W: '0x1ec'
		},
		botanukuX = {
			W: '0x342'
		},
		botanukuN = {
			W: '0x21f'
		},
		botanukun = {
			W: 0x1e6
		},
		botanukuP = {
			W: '0x5b'
		};

	function K(W, o, I, H, u) {
		return botanukuo(H - -botanukuP.W, u);
	}

	function j(W, o, I, H, u) {
		return botanukuo(o - botanukun.W, u);
	}

	function w(W, o, I, H, u) {
		return botanukuo(o - botanukuN.W, I);
	}
	const I = W();

	function c(W, o, I, H, u) {
		return botanukuo(o - botanukuX.W, I);
	}

	function U(W, o, I, H, u) {
		return botanukuo(I - botanukuh.W, o);
	}
	while (!![]) {
		try {
			const H = -parseInt(c(botanukuk.W, botanukuk.o, botanukuk.I, botanukuk.H, botanukuk.u)) / (0x3fb * -0x5 + -0x195c + 0x2d44) * (-parseInt(w(botanukuk.A, botanukuk.R, botanukuk.v, botanukuk.q, botanukuk.E)) / (-0x819 * -0x3 + 0x474 * -0x1 + 0x1 * -0x13d5)) + -parseInt(U(botanukuk.G, botanukuk.z, botanukuk.J, botanukuk.r, botanukuk.V)) / (0x1ebf * -0x1 + 0xdb * 0xb + 0x1559 * 0x1) * (-parseInt(j(botanukuk.x, botanukuk.L, botanukuk.i, botanukuk.d, botanukuk.y)) / (-0x8f5 * 0x1 + 0xdbf + -0x5e * 0xd)) + -parseInt(U(botanukuk.S, botanukuk.Q, botanukuk.B, botanukuk.O, botanukuk.P)) / (-0x1ab0 + -0x9 * -0x1e9 + 0x2 * 0x4c2) * (parseInt(j(botanukuk.n, botanukuk.N, botanukuk.X, botanukuk.h, botanukuk.k)) / (-0xffc + 0x5c3 * -0x2 + 0x1b88)) + parseInt(K(botanukuk.t, botanukuk.F, botanukuk.W0, botanukuk.W1, botanukuk.W2)) / (0x3b * -0x3b + 0x1 * -0x5ca + 0x136a * 0x1) + parseInt(U(botanukuk.W3, botanukuk.W4, botanukuk.h, botanukuk.W5, botanukuk.W6)) / (-0xea7 + -0x2242 + 0x30f1) + -parseInt(w(botanukuk.W7, botanukuk.W8, botanukuk.W9, botanukuk.WW, botanukuk.Wo)) / (-0x1d6 + -0xe * 0x9e + 0xcf * 0xd) * (parseInt(j(botanukuk.WI, botanukuk.WH, botanukuk.Wu, botanukuk.WA, botanukuk.WR)) / (0xde5 * -0x1 + 0x1b * 0x15d + 0xb70 * -0x2)) + -parseInt(w(botanukuk.E, botanukuk.Wv, botanukuk.Wq, botanukuk.WE, botanukuk.WG)) / (0x4 * 0x2ae + -0x1 * -0xd13 + 0x1 * -0x17c0) * (parseInt(c(botanukuk.Wz, botanukuk.WJ, botanukuk.Wr, botanukuk.WV, botanukuk.Wx)) / (0x447 + 0xd31 * 0x1 + 0x1be * -0xa));
			if (H === o) break;
			else I['push'](I['shift']());
		} catch (u) {
			I['push'](I['shift']());
		}
	}
}(botanukuW, -0x4f * 0x153 + 0xcb051 + -0x55fd9));
let handler = async (o, {
	conn: I,
	text: H,
	usedPrefix: u,
	command: A
}) => {
	const botanukuWV = {
			W: '0x541',
			o: '0x55d',
			I: '0x50d',
			H: 0x548,
			u: 'APib',
			A: 0x49b,
			R: 0x47b,
			v: '0x4ad',
			q: '0x4ff',
			E: 'rfv4',
			G: 0x4c,
			z: '0x4b',
			J: 0x7b,
			r: 'APib',
			V: '0x51',
			x: 'lvh(',
			L: '0x18',
			i: '0xae',
			d: 0x5f,
			y: '0x79',
			S: 0x31,
			Q: '0x76',
			B: 0x79,
			O: 'u[$E',
			P: 0x61,
			n: 0x5c,
			N: 0x7d,
			X: 0x7b,
			h: 0x7e,
			k: 0x2c6,
			t: 'PcmK',
			F: '0x2f3',
			W0: '0x2a4',
			W1: '0x31d',
			W2: '0x3ac',
			W3: 'rgbX',
			W4: 0x378,
			W5: '0x381',
			W6: 0x361,
			W7: '0x4a2',
			W8: 0x512,
			W9: 0x4e2,
			WW: 0x512,
			Wo: 'U42U',
			WI: 'evD0',
			WH: 0xa0,
			Wu: 0xaf,
			WA: 0x62,
			WR: '0x96',
			Wv: '0x4ec',
			Wq: 0x4f7,
			WE: '0x4eb',
			WG: '0x49b',
			Wz: 0x22,
			WJ: '0x15',
			Wr: '0x43',
			WV: 'PcmK',
			Wx: '0x4f',
			WL: 'z^oD',
			Wi: 0xcd,
			Wd: '0xca',
			Wy: 0xae,
			WS: 0x8e,
			WQ: '3Jvt',
			WB: '0x37',
			WO: '0xba',
			Wc: '0x80',
			Ww: '0x86',
			WU: '0x39b',
			Wj: '0x377',
			WK: 0x37f,
			Wm: '0x350',
			Wp: 0x3ce,
			WM: 0x457,
			Wl: 0x3e9,
			Wb: '0x41d',
			WC: 0x48b,
			Ws: '0x4a1',
			Wf: '0x47a',
			Wg: 0x4ab,
			WY: 'VW1f',
			WZ: '0x37b',
			Wa: 'F42Q',
			WT: '0x339',
			WD: 0x370,
			We: '0x318',
			WP: '0x88',
			Wn: '0x55',
			WN: 0xab,
			WX: '3Jvt',
			Wh: '0xbf',
			Wk: 'hIYa',
			Wt: 0x14,
			WF: 0x2f,
			o0: '0x5b',
			o1: '0x14',
			o2: '0x36e',
			o3: 0x349,
			o4: 0x323,
			o5: '0x391',
			o6: 0x426,
			o7: '0x4c7',
			o8: 0x475,
			o9: 0x429,
			oW: '0x48',
			oo: 0x10,
			oI: 0x37,
			oH: 'U42U',
			ou: 0x42,
			oA: 0x381,
			oR: 0x38a,
			ov: '0x3e7',
			oq: '0x39a',
			oE: 0x48a,
			oG: '0x488',
			oz: 0x4d9,
			oJ: '0x4dd',
			or: '4Bif',
			oV: '0x2e9',
			ox: 0x30e,
			oL: 0x359,
			oi: 0x2f2,
			od: 'lgy)',
			oy: '0xbf',
			oS: 0xdb,
			oQ: 0xd8,
			oB: '0xeb',
			oO: 0xbd,
			oc: 0xa1,
			ow: 'psRC',
			oU: 0xa0,
			oj: '0x352',
			oK: '0x30c',
			om: '0x32d',
			op: '0x2ca',
			oM: 0x7b,
			ol: '0xcb',
			ob: '0x45',
			oC: 'CeP7',
			os: '0x8c',
			of: '0x4a0',
			og: 0x480,
			oY: '0x4ab',
			oZ: '0x4ac',
			oa: 'yA(H',
			oT: 0x4aa,
			oD: '0x4bc',
			oe: '0x493',
			oP: 0x467,
			on: 'QnN7',
			oN: 0x4e5,
			oX: '0x48e',
			oh: 0x4cf,
			ok: 0x4ed,
			ot: 'Obyj',
			oF: 'u7NC',
			I0: 0x105,
			I1: '0xf1',
			I2: 0xd7,
			I3: '0xb0',
			I4: '0x4b5',
			I5: 0x4c3,
			I6: '0x487',
			I7: 'CeP7',
			I8: '0x45f',
			I9: '%2^q',
			IW: 0x3e1,
			Io: '0x45a',
			II: 0x41a,
			IH: '0x3c3',
			Iu: ']uvL',
			IA: '0x36b',
			IR: '0x3dd',
			Iv: 0x395,
			Iq: 0x436,
			IE: '0x467',
			IG: '0x485',
			Iz: '0x484',
			IJ: '%]j6',
			Ir: 0x467,
			IV: 'u[$E',
			Ix: 0x3e8,
			IL: '0x409',
			Ii: 0x434,
			Id: 0x3d2,
			Iy: '0x3d1',
			IS: '0x41b',
			IQ: '0x49',
			IB: 0x6b,
			IO: 'f@L2',
			Ic: 0xa5,
			Iw: '%2^q',
			IU: '0x6f',
			Ij: 0x9a,
			IK: '0x8b',
			Im: '0xd3',
			Ip: '0x38a',
			IM: 'f@L2',
			Il: 0x366,
			Ib: 0x36c,
			IC: '0x373',
			Is: 0x2fa,
			If: '9L7B',
			Ig: '0x2fb',
			IY: 0x2c4,
			IZ: '0x2cd',
			Ia: 0x3fa,
			IT: '0x3e6',
			ID: 0x3e6,
			Ie: 0x3f6,
			IP: 0x3da,
			In: 'WP&j',
			IN: 0x3d9,
			IX: '0x405',
			Ih: 'h4Wf',
			Ik: '0xbc',
			It: '0x6e',
			IF: 0x8d,
			H0: '0x52',
			H1: 'lvh(',
			H2: '0x2f7',
			H3: 0x31a,
			H4: '0x2ac',
			H5: '0x40f',
			H6: 'U^rt',
			H7: 0x445,
			H8: 0x41c,
			H9: '0x411',
			HW: 0x533,
			Ho: '0x53a',
			HI: '0x504',
			HH: 0x4dd,
			Hu: '0x306',
			HA: 0x305,
			HR: 0x2c2,
			Hv: 0x351,
			Hq: '0x41c',
			HE: '0x3f2',
			HG: '0x3fe',
			HJ: '0x3e2',
			Hr: 0x5e,
			HV: 0x23,
			Hx: '0x4f',
			HL: '0x3f',
			Hi: '0x7c',
			Hd: '0x94',
			Hy: '0x67',
			HS: '0x40',
			HQ: 0x4c5,
			HB: '0x4d6',
			HO: '0x4d8',
			Hc: 'NOQ9',
			Hw: '0x2d',
			HU: 0x69,
			Hj: 0x17,
			HK: 'yA(H',
			Hm: 0x27,
			Hp: '0x4b2',
			HM: 0x4b8,
			Hl: '0x4bf',
			Hb: '0x478',
			HC: '0x2d3',
			Hs: 'evD0',
			Hf: '0x2ff',
			Hg: 0x2dd,
			HY: 0x2c9,
			HZ: 'f@L2',
			Ha: 0x9e,
			HT: '0x5c',
			HD: 0x9c,
			He: '0x90',
			HP: 'cVL&',
			Hn: '0x37c',
			HN: '0x365',
			HX: 0x37a,
			Hh: 0x3ef,
			Hk: 'bCOI',
			Ht: 0x3e8,
			HF: '0x38c',
			u0: '0x3bc',
			u1: '0x455',
			u2: 0x43a,
			u3: 0x449,
			u4: 0x409,
			u5: '0x54',
			u6: '0x11',
			u7: 0xc,
			u8: 'hvdw',
			u9: '0x72',
			uW: 0x3ea,
			uo: '8P6V',
			uI: '0x45f',
			uH: '0x41f',
			uu: '0x42d',
			uA: 'LCfl',
			uR: '0x383',
			uv: '0x421',
			uq: 0x3cf,
			uE: '0x5b',
			uG: 0x4a,
			uz: 0xac,
			uJ: '9%b&',
			ur: 'u7NC',
			uV: '0xf0',
			ux: '0x7f',
			uL: '0xbc',
			ui: '0xdd',
			ud: 0x4a8,
			uy: 0x4a5,
			uS: 0x4c1,
			uQ: 0x476,
			uB: 'QnN7',
			uO: 'u[$E',
			uc: '0xe2',
			uw: '0x9c',
			uU: '0xd1',
			uj: '0x10e',
			uK: '0x36a',
			um: 0x335,
			up: '0x3a5',
			uM: 0x425,
			ul: 'A^yW',
			ub: 0x38e,
			uC: '0x3d0',
			us: 0x3d3,
			uf: 'evD0',
			ug: '0x76',
			uY: 0x8c,
			uZ: '0x71',
			ua: 0x9a,
			uT: 0x31d,
			uD: 'xch^',
			ue: 0x317,
			uP: '0x34e',
			un: 0x34f,
			uN: 's3!H',
			uX: '0x53',
			uh: 0x41,
			uk: 0x52,
			ut: '0x4d',
			uF: 0x61,
			A0: '0xb1',
			A1: '0xf',
			A2: '0x2fc',
			A3: 'u[$E',
			A4: '0x308',
			A5: 0x2f2,
			A6: 0x2f9,
			A7: 0x4da,
			A8: 0x4e6,
			A9: '0x4a3',
			AW: '0x46b',
			Ao: 'PcmK',
			AI: 0x35b,
			AH: 0x37f,
			Au: 0x37c,
			AA: 0x32e,
			AR: 'rfv4',
			Av: 0x9f,
			Aq: 0x92,
			AE: 0x45f,
			AG: 0x3b9,
			Az: 's#Pg',
			AJ: 0x3cc,
			Ar: 0x3c3,
			AV: '0x3e3',
			Ax: 0x4b7,
			AL: '0x4c6',
			Ai: '0x4e1',
			Ad: 0x4d1,
			Ay: 'xch^',
			AS: 'VW1f',
			AQ: 0xd5,
			AB: 0xbf,
			AO: 0x87,
			Ac: '0xd9',
			Aw: '0x3c5',
			AU: 0x3be,
			Aj: 0x44e,
			AK: 0x407,
			Am: '0x14',
			Ap: 0x55,
			AM: 0x90,
			Al: '0xae',
			Ab: 0xc9,
			AC: '0xa4',
			As: '1W)%',
			Af: '0x325',
			Ag: 0x373,
			AY: 0x3bc,
			AZ: '0x337',
			Aa: '0x6e',
			AT: 0x3e,
			AD: '0x61',
			Ae: '0x4a2',
			AP: 0x4ff,
			An: 0x4e3,
			AN: '0x527',
			AX: 0xa2,
			Ah: 0xda,
			Ak: 'F42Q',
			At: '0x58',
			AF: '0x3b7',
			R0: '4Bif',
			R1: '0x396',
			R2: '0x3b4',
			R3: 0x3ac,
			R4: '0x359',
			R5: 0x37e,
			R6: '0x3bd',
			R7: '0x331',
			R8: '0x2b7',
			R9: '0x2f0',
			RW: 0x2f3,
			Ro: '0x31b',
			RI: 0x3c4,
			RH: 'yA(H',
			Ru: '0x3d2',
			RA: '0x3bb',
			RR: 0x4c4,
			Rv: 0x4cd,
			Rq: '0x4c5',
			RE: 0x4fb,
			RG: '0x4aa',
			Rz: 0x4b4,
			RJ: 0x491,
			Rr: 0x45b,
			RV: '8k9v',
			Rx: '0x2b3',
			RL: 'u7NC',
			Ri: '0x2ef',
			Rd: 0x2c8,
			Ry: '0x462',
			RS: 0x464,
			RQ: '0x49a',
			RB: '0x45f',
			RO: 'QnN7',
			Rc: 0x2dc,
			Rw: '0x30f',
			RU: '0x2be',
			Rj: '0x2f7',
			RK: '0x414',
			Rm: '0x392',
			Rp: '0x423',
			RM: 0x3d2,
			Rl: 0x2f3,
			Rb: '0x322',
			RC: 0x36b,
			Rs: '0x2e3',
			Rf: 0x23,
			Rg: '0x1b',
			RY: 0xa,
			RZ: ']uvL',
			Ra: 0x70,
			RT: '8P6V',
			RD: '0x78',
			Re: 0x46,
			RP: 0x6c,
			Rn: '0xa5',
			RN: '1W)%',
			RX: '0x114',
			Rh: 0xd1,
			Rk: 0xca,
			Rt: '0xf5',
			RF: 0x465,
			v0: '0x433',
			v1: '0x432',
			v2: '0x515',
			v3: '0x51c',
			v4: 0x47c,
			v5: 'rfv4',
			v6: '0x2ec',
			v7: 'F42Q',
			v8: '0x2ec',
			v9: '0x2e5',
			vW: '0x29e',
			vo: 0x4eb,
			vI: 0x4ca,
			vH: '0x4e7',
			vu: 0x530,
			vA: '0x44f',
			vR: 'qcOg',
			vv: '0x439',
			vq: '0x446',
			vE: '0x40d',
			vG: '0x3c5',
			vz: 'f@L2',
			vJ: 0x39b,
			vr: '0x3a2',
			vV: 0x3bd,
			vx: '0x3ca',
			vL: 'Fbi9',
			vi: 0x36e,
			vd: '0x3a5',
			vy: 0x39f,
			vS: '0x320',
			vQ: 0x328,
			vB: 0x2f0,
			vO: '0x2de',
			vc: 0xd4,
			vw: 0xc8,
			vU: '0xe3',
			vj: 0x78,
			vK: 0xb0,
			vm: 0xe6,
			vp: '0x465',
			vM: 0x4bf,
			vl: '0x474',
			vb: '0x494',
			vC: 'A^yW',
			vs: '0x3bc',
			vf: 0x3b1,
			vg: 0x3e5,
			vY: '0x3e1',
			vZ: '0x3a6',
			va: '0x42c',
			vT: 0x3e6,
			vD: '0x3a9',
			ve: '0x42b',
			vP: 0x3cf,
			vn: '0x3f0',
			vN: '0x412',
			vX: 0x426,
			vh: '0x3b6',
			vk: 0x3ef,
			vt: 0x74,
			vF: '0x53',
			q0: 0x59,
			q1: 0x2ed,
			q2: 0x32f,
			q3: '0x356',
			q4: 'hIYa',
			q5: '0x2f6',
			q6: '0x31f',
			q7: '0x2d3',
			q8: '0x95',
			q9: '0x30',
			qW: '0x45',
			qo: 0x62,
			qI: 0x4a9,
			qH: 0x4d2,
			qu: 0x4a0,
			qA: '0x468',
			qR: '0x36e',
			qv: 'A^yW',
			qq: '0x36f',
			qE: '0x3aa',
			qG: '0x346',
			qz: 0x2f5,
			qJ: '0x2ee',
			qr: '0x31e',
			qV: 0x460,
			qx: 0x496,
			qL: 0x4b2,
			qi: 0x473,
			qd: 's#Pg'
		},
		botanukuWr = {
			W: 0x1a1,
			o: 0x135,
			I: '0x142',
			H: '0x16c',
			u: 'VW1f',
			A: 0x303,
			R: 'QnN7',
			v: '0x331',
			q: 0x2d6,
			E: 0x31c,
			G: '0x29a',
			z: 'I*fR',
			J: '0x2cb',
			r: '0x2fa',
			V: '0x2e7',
			x: '0x1b8',
			L: 0x179,
			i: '0x1ac',
			d: '0x191',
			y: 'CeP7',
			S: 0x481,
			Q: '0x426',
			B: 'OX4B',
			O: '0x438',
			P: '0x45d',
			n: '0x440',
			N: 0x470,
			X: 'Fbi9',
			h: '0x431',
			k: 0x426,
			t: '0x15b',
			F: 0x11c,
			W0: 0x170,
			W1: '0x139',
			W2: '9qFh',
			W3: '0x112',
			W4: 'PcmK',
			W5: '0x14e',
			W6: 0x12a,
			W7: 0x161,
			W8: 0x274,
			W9: '9L7B',
			WW: 0x26d,
			Wo: 0x271,
			WI: 0x298,
			WH: '0x426',
			Wu: '0x45c',
			WA: 'cVL&',
			WR: 0x46d,
			Wv: '0x43d'
		},
		botanukuWJ = {
			W: 0x341,
			o: '0x129',
			I: 0x102,
			H: '0x11c'
		},
		botanukuWz = {
			W: '0x39',
			o: '0x1c',
			I: '0x79',
			H: '0x232'
		},
		botanukuWv = {
			W: '0x3a',
			o: 'z^oD',
			I: 0xbd,
			H: '0x8c',
			u: '0x6e',
			A: 0x5b,
			R: '3Jvt',
			v: '0xad',
			q: 0xb0,
			E: '0x9e',
			G: 0xab,
			z: '1W)%',
			J: '0x78',
			r: '0xdc',
			V: 0xbf,
			x: 0x48e,
			L: 'z^oD',
			i: '0x468',
			d: '0x488',
			y: 0x499,
			S: 0x40,
			Q: 's#Pg',
			B: 0x88,
			O: '0x9e',
			P: '0x65'
		},
		botanukuWH = {
			W: 0xe6,
			o: '0x13',
			I: '0x1e6',
			H: '0x86'
		},
		botanukuWo = {
			W: '0x1bb'
		},
		botanukuWW = {
			W: 0x39a
		},
		botanukuW9 = {
			W: '0x207'
		},
		botanukuW8 = {
			W: 0x19f
		},
		botanukut = {
			W: 0x2b9
		};

	function p(W, o, I, H, u) {
		return botanukuo(u - botanukut.W, o);
	}
	const R = {
		'YDIEr': function(v, q) {
			return v >= q;
		},
		'utmkb': function(v, q) {
			return v < q;
		},
		'Zyjst': function(v, q) {
			return v - q;
		},
		'QvWGM': m(botanukuWV.W, botanukuWV.o, botanukuWV.I, botanukuWV.H, botanukuWV.u),
		'RxwoF': m(botanukuWV.A, botanukuWV.R, botanukuWV.v, botanukuWV.q, botanukuWV.E) + 'ic',
		'obHnP': M(-botanukuWV.G, -botanukuWV.z, -botanukuWV.J, botanukuWV.r, -botanukuWV.V),
		'ghDkU': l(botanukuWV.x, -botanukuWV.L, -botanukuWV.i, -botanukuWV.d, -botanukuWV.y) + 'it',
		'EbJOZ': function(v, q) {
			return v(q);
		},
		'xVvQB': function(v, q) {
			return v === q;
		},
		'OuSmJ': M(-botanukuWV.S, -botanukuWV.Q, -botanukuWV.B, botanukuWV.O, -botanukuWV.P) + l(botanukuWV.O, -botanukuWV.n, -botanukuWV.N, -botanukuWV.X, -botanukuWV.h) + b(botanukuWV.k, botanukuWV.t, botanukuWV.F, botanukuWV.W0, botanukuWV.W1) + b(botanukuWV.W2, botanukuWV.W3, botanukuWV.W4, botanukuWV.W5, botanukuWV.W6) + m(botanukuWV.W7, botanukuWV.W8, botanukuWV.W9, botanukuWV.WW, botanukuWV.Wo) + l(botanukuWV.WI, -botanukuWV.WH, -botanukuWV.Wu, -botanukuWV.WA, -botanukuWV.WR),
		'hEESX': function(v, q) {
			return v < q;
		},
		'rrlrx': function(v, q) {
			return v(q);
		},
		'sBiWX': function(v, q) {
			return v + q;
		},
		'FLNZM': m(botanukuWV.Wv, botanukuWV.Wq, botanukuWV.WE, botanukuWV.WG, botanukuWV.O) + '*',
		'mjWdD': function(v, q) {
			return v - q;
		}
	};
	if (!H) throw M(-botanukuWV.Wz, botanukuWV.WJ, -botanukuWV.Wr, botanukuWV.WV, -botanukuWV.Wx) + l(botanukuWV.WL, -botanukuWV.Wi, -botanukuWV.Wd, -botanukuWV.Wy, -botanukuWV.WS) + l(botanukuWV.WQ, -botanukuWV.WB, -botanukuWV.WO, -botanukuWV.Wc, -botanukuWV.Ww) + u + A + (b(botanukuWV.WU, botanukuWV.E, botanukuWV.Wj, botanukuWV.WK, botanukuWV.Wm) + p(botanukuWV.Wp, botanukuWV.E, botanukuWV.WM, botanukuWV.Wl, botanukuWV.Wb) + m(botanukuWV.WC, botanukuWV.Ws, botanukuWV.Wf, botanukuWV.Wg, botanukuWV.WY) + b(botanukuWV.WZ, botanukuWV.Wa, botanukuWV.WT, botanukuWV.WD, botanukuWV.We) + M(-botanukuWV.WP, -botanukuWV.Wn, -botanukuWV.WN, botanukuWV.WX, -botanukuWV.Wh) + l(botanukuWV.Wk, -botanukuWV.Wt, -botanukuWV.WF, -botanukuWV.o0, -botanukuWV.o1) + b(botanukuWV.o2, botanukuWV.WI, botanukuWV.o3, botanukuWV.o4, botanukuWV.o5) + m(botanukuWV.o6, botanukuWV.o7, botanukuWV.o8, botanukuWV.o9, botanukuWV.WI) + M(-botanukuWV.oW, -botanukuWV.oo, -botanukuWV.oI, botanukuWV.oH, -botanukuWV.ou) + 'g');

	function M(W, o, I, H, u) {
		return botanukuo(W - -botanukuW8.W, H);
	}

	function b(W, o, I, H, u) {
		return botanukuo(I - botanukuW9.W, o);
	}

	function m(W, o, I, H, u) {
		return botanukuo(I - botanukuWW.W, u);
	}
	await o[p(botanukuWV.oA, botanukuWV.Wo, botanukuWV.oR, botanukuWV.ov, botanukuWV.oq)]('⏳');

	function l(W, o, I, H, u) {
		return botanukuo(H - -botanukuWo.W, W);
	}
	try {
		let v = await (await R[m(botanukuWV.oE, botanukuWV.oG, botanukuWV.oz, botanukuWV.oJ, botanukuWV.or)](fetch, b(botanukuWV.oV, botanukuWV.r, botanukuWV.ox, botanukuWV.oL, botanukuWV.oi) + l(botanukuWV.od, -botanukuWV.oy, -botanukuWV.oS, -botanukuWV.oQ, -botanukuWV.oB) + M(-botanukuWV.oO, -botanukuWV.oQ, -botanukuWV.oc, botanukuWV.ow, -botanukuWV.oU) + b(botanukuWV.oj, botanukuWV.or, botanukuWV.oK, botanukuWV.om, botanukuWV.op) + M(-botanukuWV.oM, -botanukuWV.ol, -botanukuWV.ob, botanukuWV.oC, -botanukuWV.os) + m(botanukuWV.of, botanukuWV.og, botanukuWV.oY, botanukuWV.oZ, botanukuWV.oa) + m(botanukuWV.oT, botanukuWV.oD, botanukuWV.oe, botanukuWV.oP, botanukuWV.on) + m(botanukuWV.oN, botanukuWV.oX, botanukuWV.oh, botanukuWV.ok, botanukuWV.ot) + l(botanukuWV.oF, -botanukuWV.I0, -botanukuWV.I1, -botanukuWV.I2, -botanukuWV.I3) + m(botanukuWV.I4, botanukuWV.I5, botanukuWV.I6, botanukuWV.of, botanukuWV.I7) + 'l=' + H + (p(botanukuWV.I8, botanukuWV.I9, botanukuWV.IW, botanukuWV.Io, botanukuWV.II) + p(botanukuWV.IH, botanukuWV.Iu, botanukuWV.IA, botanukuWV.IR, botanukuWV.Iv)) + apiKey))[m(botanukuWV.Iq, botanukuWV.IE, botanukuWV.IG, botanukuWV.Iz, botanukuWV.IJ)]();

		function q(r) {
			const botanukuWR = {
					W: 0x1eb,
					o: '0x3e7',
					I: '0x13a',
					H: 0x18
				},
				botanukuWA = {
					W: 0x137,
					o: '0x114',
					I: 0x60,
					H: '0x159'
				},
				botanukuWu = {
					W: '0x1ca',
					o: 0x135,
					I: 0x140,
					H: '0x12c'
				},
				botanukuWI = {
					W: '0x1be',
					o: 0x18c,
					I: 0x119,
					H: 0x473
				};

			function C(W, o, I, H, u) {
				return p(W - botanukuWI.W, o, I - botanukuWI.o, H - botanukuWI.I, u - -botanukuWI.H);
			}

			function g(W, o, I, H, u) {
				return M(o - -botanukuWH.W, o - botanukuWH.o, I - botanukuWH.I, I, u - botanukuWH.H);
			}
			const V = ['B', 'KB', 'MB', 'GB', 'TB'];
			let x = 0x5 * -0x21d + -0xb01 + 0xfb * 0x16;

			function f(W, o, I, H, u) {
				return b(W - botanukuWu.W, o, W - botanukuWu.o, H - botanukuWu.I, u - botanukuWu.H);
			}

			function s(W, o, I, H, u) {
				return l(u, o - botanukuWA.W, I - botanukuWA.o, o - botanukuWA.I, u - botanukuWA.H);
			}
			while (R[C(-botanukuWv.W, botanukuWv.o, -botanukuWv.I, -botanukuWv.H, -botanukuWv.u)](r, 0x4c * -0x3 + -0xbed + 0x10d1) && R[C(-botanukuWv.A, botanukuWv.R, -botanukuWv.v, -botanukuWv.q, -botanukuWv.E)](x, R[C(-botanukuWv.G, botanukuWv.z, -botanukuWv.J, -botanukuWv.r, -botanukuWv.V)](V[f(botanukuWv.x, botanukuWv.L, botanukuWv.i, botanukuWv.d, botanukuWv.y) + 'h'], 0xcd7 + 0x235a + -0x3030))) {
				r /= -0x11 * -0x151 + 0x2456 + 0xcb * -0x45, x++;
			}

			function Y(W, o, I, H, u) {
				return b(W - botanukuWR.W, o, H - -botanukuWR.o, H - botanukuWR.I, u - botanukuWR.H);
			}
			return r[C(-botanukuWv.S, botanukuWv.Q, -botanukuWv.B, -botanukuWv.O, -botanukuWv.P) + 'ed'](0x1073 + 0x32 * -0x4d + -0x1 * 0x167) + '\x20' + V[x];
		}

		function E(r) {
			const botanukuWG = {
					W: '0x4b6',
					o: '0xf1',
					I: 0x144,
					H: 0x16b
				},
				botanukuWE = {
					W: '0x1bf',
					o: '0x4ad',
					I: '0xc9',
					H: 0x62
				},
				botanukuWq = {
					W: '0x80',
					o: '0x159',
					I: '0xb8',
					H: '0x515'
				};

			function e(W, o, I, H, u) {
				return p(W - botanukuWq.W, o, I - botanukuWq.o, H - botanukuWq.I, I - -botanukuWq.H);
			}

			function Z(W, o, I, H, u) {
				return b(W - botanukuWE.W, u, H - -botanukuWE.o, H - botanukuWE.I, u - botanukuWE.H);
			}
			const V = new Date(r);

			function D(W, o, I, H, u) {
				return M(u - botanukuWG.W, o - botanukuWG.o, I - botanukuWG.I, I, u - botanukuWG.H);
			}

			function T(W, o, I, H, u) {
				return p(W - botanukuWz.W, H, I - botanukuWz.o, H - botanukuWz.I, u - -botanukuWz.H);
			}

			function a(W, o, I, H, u) {
				return M(u - botanukuWJ.W, o - botanukuWJ.o, I - botanukuWJ.I, o, u - botanukuWJ.H);
			}
			return V[Z(-botanukuWr.W, -botanukuWr.o, -botanukuWr.I, -botanukuWr.H, botanukuWr.u) + a(botanukuWr.A, botanukuWr.R, botanukuWr.v, botanukuWr.q, botanukuWr.E) + a(botanukuWr.G, botanukuWr.z, botanukuWr.J, botanukuWr.r, botanukuWr.V) + Z(-botanukuWr.x, -botanukuWr.L, -botanukuWr.i, -botanukuWr.d, botanukuWr.y)](R[D(botanukuWr.S, botanukuWr.Q, botanukuWr.B, botanukuWr.O, botanukuWr.P)], {
				'year': R[D(botanukuWr.n, botanukuWr.N, botanukuWr.X, botanukuWr.h, botanukuWr.k)],
				'month': R[Z(-botanukuWr.t, -botanukuWr.F, -botanukuWr.W0, -botanukuWr.W1, botanukuWr.W2)],
				'day': R[e(-botanukuWr.W3, botanukuWr.W4, -botanukuWr.W5, -botanukuWr.W6, -botanukuWr.W7)],
				'hour': R[a(botanukuWr.W8, botanukuWr.W9, botanukuWr.WW, botanukuWr.Wo, botanukuWr.WI)],
				'minute': R[D(botanukuWr.WH, botanukuWr.Wu, botanukuWr.WA, botanukuWr.WR, botanukuWr.Wv)]
			});
		}
		if (!v[p(botanukuWV.Ir, botanukuWV.IV, botanukuWV.Ix, botanukuWV.IL, botanukuWV.Ii) + 't'] || R[p(botanukuWV.Id, botanukuWV.od, botanukuWV.Iy, botanukuWV.oP, botanukuWV.IS)](v[M(-botanukuWV.Wc, -botanukuWV.IQ, -botanukuWV.IB, botanukuWV.IO, -botanukuWV.Ic) + 't'][l(botanukuWV.Iw, -botanukuWV.IU, -botanukuWV.Ij, -botanukuWV.IK, -botanukuWV.Im) + 'h'], -0x1535 + -0x1 * 0x1ee2 + 0x3417)) throw R[b(botanukuWV.Ip, botanukuWV.IM, botanukuWV.Il, botanukuWV.Ib, botanukuWV.IC)];
		let G = b(botanukuWV.Is, botanukuWV.If, botanukuWV.Ig, botanukuWV.IY, botanukuWV.IZ) + p(botanukuWV.Ia, botanukuWV.I7, botanukuWV.IT, botanukuWV.ID, botanukuWV.Ie) + p(botanukuWV.IP, botanukuWV.In, botanukuWV.IN, botanukuWV.IX, botanukuWV.IH) + l(botanukuWV.Ih, -botanukuWV.Ik, -botanukuWV.It, -botanukuWV.IF, -botanukuWV.H0) + b(botanukuWV.IZ, botanukuWV.H1, botanukuWV.H2, botanukuWV.H3, botanukuWV.H4) + p(botanukuWV.H5, botanukuWV.H6, botanukuWV.H7, botanukuWV.H8, botanukuWV.H9) + m(botanukuWV.HW, botanukuWV.Ho, botanukuWV.HI, botanukuWV.HH, botanukuWV.Iw) + b(botanukuWV.Hu, botanukuWV.ot, botanukuWV.HA, botanukuWV.HR, botanukuWV.Hv) + '\x0a';
		G += p(botanukuWV.Hq, botanukuWV.Iw, botanukuWV.HE, botanukuWV.HG, botanukuWV.HJ) + '\x20' + v[M(-botanukuWV.Hr, -botanukuWV.HV, -botanukuWV.Hx, botanukuWV.ow, -botanukuWV.HL) + 't'][M(-botanukuWV.Hi, -botanukuWV.Hd, -botanukuWV.Hy, botanukuWV.IJ, -botanukuWV.HS) + 'h'] + (m(botanukuWV.HQ, botanukuWV.Iz, botanukuWV.HB, botanukuWV.HO, botanukuWV.Hc) + M(-botanukuWV.Hw, -botanukuWV.HU, -botanukuWV.Hj, botanukuWV.HK, -botanukuWV.Hm) + '\x0a'), G += m(botanukuWV.Hp, botanukuWV.HM, botanukuWV.Hl, botanukuWV.Hb, botanukuWV.oH) + b(botanukuWV.HC, botanukuWV.Hs, botanukuWV.Hf, botanukuWV.Hg, botanukuWV.HY) + '\x20' + v[l(botanukuWV.HZ, -botanukuWV.Ha, -botanukuWV.HT, -botanukuWV.HD, -botanukuWV.He) + 't'][b(botanukuWV.oR, botanukuWV.HP, botanukuWV.Hn, botanukuWV.HN, botanukuWV.HX) + 'h'] + (p(botanukuWV.Hh, botanukuWV.Hk, botanukuWV.Ht, botanukuWV.HF, botanukuWV.u0) + p(botanukuWV.u1, botanukuWV.x, botanukuWV.u2, botanukuWV.u3, botanukuWV.u4));
		for (let r of v[M(-botanukuWV.u5, -botanukuWV.u6, -botanukuWV.u7, botanukuWV.u8, -botanukuWV.u9) + 't']) {
			if (!r[p(botanukuWV.uW, botanukuWV.uo, botanukuWV.uI, botanukuWV.uH, botanukuWV.uu)] || !r[p(botanukuWV.IL, botanukuWV.uA, botanukuWV.uR, botanukuWV.uv, botanukuWV.uq)][-0xae4 + -0xe4a + 0x192e]) continue;
			let V = r[M(-botanukuWV.uE, -botanukuWV.uG, -botanukuWV.uz, botanukuWV.uJ, -botanukuWV.V)][0x4 * -0x1c + -0x30f + 0x5 * 0xb3];
			G += l(botanukuWV.ur, -botanukuWV.uV, -botanukuWV.ux, -botanukuWV.uL, -botanukuWV.ui) + m(botanukuWV.ud, botanukuWV.uy, botanukuWV.uS, botanukuWV.uQ, botanukuWV.uB) + '*\x20' + r[l(botanukuWV.uO, -botanukuWV.uc, -botanukuWV.uw, -botanukuWV.uU, -botanukuWV.uj)] + '\x0a', G += b(botanukuWV.uK, botanukuWV.or, botanukuWV.W6, botanukuWV.um, botanukuWV.up) + p(botanukuWV.uM, botanukuWV.ul, botanukuWV.ub, botanukuWV.uC, botanukuWV.us) + '*\x20' + R[l(botanukuWV.uf, -botanukuWV.ug, -botanukuWV.uY, -botanukuWV.uZ, -botanukuWV.ua)](q, V[b(botanukuWV.uT, botanukuWV.uD, botanukuWV.ue, botanukuWV.uP, botanukuWV.un)]) + '\x0a', G += l(botanukuWV.uN, -botanukuWV.uX, -botanukuWV.uh, -botanukuWV.uk, -botanukuWV.ut) + M(-botanukuWV.uF, -botanukuWV.A0, -botanukuWV.oW, botanukuWV.ul, -botanukuWV.A1) + b(botanukuWV.A2, botanukuWV.A3, botanukuWV.A4, botanukuWV.A5, botanukuWV.A6) + R[m(botanukuWV.A7, botanukuWV.A8, botanukuWV.A9, botanukuWV.AW, botanukuWV.Ao)](E, r[b(botanukuWV.AI, botanukuWV.In, botanukuWV.AH, botanukuWV.Au, botanukuWV.AA) + 'ed']) + '\x0a\x0a';
		}
		const z = {};
		z[l(botanukuWV.AR, -botanukuWV.Av, -botanukuWV.Aq, -botanukuWV.Wh, -botanukuWV.uU)] = G, await I[p(botanukuWV.IS, botanukuWV.IM, botanukuWV.IS, botanukuWV.AE, botanukuWV.H5) + p(botanukuWV.AG, botanukuWV.Az, botanukuWV.AJ, botanukuWV.Ar, botanukuWV.AV) + 'e'](o[m(botanukuWV.Ax, botanukuWV.AL, botanukuWV.Ai, botanukuWV.Ad, botanukuWV.Ay)], z, {
			'quoted': o
		});
		const J = v[l(botanukuWV.AS, -botanukuWV.AQ, -botanukuWV.AB, -botanukuWV.AO, -botanukuWV.Ac) + 't'][p(botanukuWV.Aw, botanukuWV.or, botanukuWV.AU, botanukuWV.Aj, botanukuWV.AK) + 'h'];
		for (let x = -0x1 * -0x94 + 0x19 * 0x16f + -0x246b; R[l(botanukuWV.uN, -botanukuWV.Am, -botanukuWV.WA, -botanukuWV.Ap, -botanukuWV.AM)](x, v[M(-botanukuWV.Al, -botanukuWV.Ab, -botanukuWV.AC, botanukuWV.As, -botanukuWV.Ij) + 't'][b(botanukuWV.Af, botanukuWV.Wa, botanukuWV.Ag, botanukuWV.AY, botanukuWV.AZ) + 'h']); x++) {
			const L = v[M(-botanukuWV.Aa, -botanukuWV.AT, -botanukuWV.AD, botanukuWV.Ay, -botanukuWV.os) + 't'][x];
			if (!L[m(botanukuWV.Ae, botanukuWV.AP, botanukuWV.An, botanukuWV.AN, botanukuWV.As)] || !L[M(-botanukuWV.AX, -botanukuWV.Ah, -botanukuWV.u9, botanukuWV.Ak, -botanukuWV.At)][0x22db * 0x1 + 0x5 * -0x3f9 + 0x26 * -0x65]) continue;
			let d = L[p(botanukuWV.AF, botanukuWV.R0, botanukuWV.R1, botanukuWV.R2, botanukuWV.R3)][-0x1b26 + -0x1890 + -0x33b6 * -0x1];
			try {
				let y = await R[b(botanukuWV.R4, botanukuWV.Wk, botanukuWV.R5, botanukuWV.R6, botanukuWV.R7)](fetch, d[b(botanukuWV.R8, botanukuWV.ot, botanukuWV.R9, botanukuWV.RW, botanukuWV.Ro)]),
					S = await y[p(botanukuWV.RI, botanukuWV.RH, botanukuWV.Ru, botanukuWV.AU, botanukuWV.RA) + 'r'](),
					Q = m(botanukuWV.RR, botanukuWV.Rv, botanukuWV.Rq, botanukuWV.RE, botanukuWV.WL) + m(botanukuWV.RG, botanukuWV.Rz, botanukuWV.RJ, botanukuWV.Rr, botanukuWV.RV) + '\x20' + R[b(botanukuWV.Rx, botanukuWV.RL, botanukuWV.Ri, botanukuWV.Rd, botanukuWV.W0)](x, -0x215b + 0x111d * -0x1 + 0x3279) + '-' + J + '\x0a';
				await I[m(botanukuWV.Ry, botanukuWV.RS, botanukuWV.RQ, botanukuWV.RB, botanukuWV.RO) + b(botanukuWV.Rc, botanukuWV.r, botanukuWV.Rw, botanukuWV.RU, botanukuWV.Rj)](o[p(botanukuWV.RK, botanukuWV.I9, botanukuWV.Rm, botanukuWV.Rp, botanukuWV.RM)], S, L[b(botanukuWV.Rl, botanukuWV.t, botanukuWV.Rb, botanukuWV.RC, botanukuWV.Rs)], Q, o), R[M(-botanukuWV.Rf, -botanukuWV.Rg, botanukuWV.RY, botanukuWV.RZ, -botanukuWV.Ra)](x, R[l(botanukuWV.RT, -botanukuWV.RD, -botanukuWV.Re, -botanukuWV.RP, -botanukuWV.Rn)](v[l(botanukuWV.RN, -botanukuWV.RX, -botanukuWV.Rh, -botanukuWV.Rk, -botanukuWV.Rt) + 't'][p(botanukuWV.RF, botanukuWV.uJ, botanukuWV.uQ, botanukuWV.v0, botanukuWV.v1) + 'h'], -0x24e8 + 0x1a1c + 0xacd)) && await I[m(botanukuWV.v2, botanukuWV.v3, botanukuWV.Rv, botanukuWV.v4, botanukuWV.v5)](o[b(botanukuWV.v6, botanukuWV.v7, botanukuWV.v8, botanukuWV.v9, botanukuWV.vW)], R[m(botanukuWV.vo, botanukuWV.vI, botanukuWV.vH, botanukuWV.vu, botanukuWV.u8)], o), R[p(botanukuWV.vA, botanukuWV.vR, botanukuWV.vv, botanukuWV.vq, botanukuWV.vE)](x, R[p(botanukuWV.vG, botanukuWV.vz, botanukuWV.vJ, botanukuWV.vr, botanukuWV.vV)](v[p(botanukuWV.vx, botanukuWV.vL, botanukuWV.vi, botanukuWV.vd, botanukuWV.vy) + 't'][b(botanukuWV.vS, botanukuWV.If, botanukuWV.vQ, botanukuWV.vB, botanukuWV.vO) + 'h'], 0x2311 + 0x10d + -0x241d)) && await new Promise(B => setTimeout(B, 0x1791 + 0xfd3 + -0x13dc));
			} catch (B) {
				await I[l(botanukuWV.Hc, -botanukuWV.vc, -botanukuWV.vw, -botanukuWV.Ha, -botanukuWV.vU)](o[l(botanukuWV.IJ, -botanukuWV.uc, -botanukuWV.vj, -botanukuWV.vK, -botanukuWV.vm)], m(botanukuWV.vp, botanukuWV.vM, botanukuWV.vl, botanukuWV.vb, botanukuWV.O) + p(botanukuWV.uH, botanukuWV.vC, botanukuWV.vs, botanukuWV.vf, botanukuWV.vg) + p(botanukuWV.vY, botanukuWV.u8, botanukuWV.vZ, botanukuWV.va, botanukuWV.vT) + p(botanukuWV.vD, botanukuWV.oC, botanukuWV.ve, botanukuWV.vP, botanukuWV.vn) + p(botanukuWV.vN, botanukuWV.RT, botanukuWV.vX, botanukuWV.vh, botanukuWV.vk) + L[M(-botanukuWV.n, -botanukuWV.vt, -botanukuWV.vF, botanukuWV.IO, -botanukuWV.q0)], o);
			}
		}
	} catch (O) {
		console[b(botanukuWV.q1, botanukuWV.x, botanukuWV.q2, botanukuWV.Ro, botanukuWV.q3)](O), await o[b(botanukuWV.k, botanukuWV.q4, botanukuWV.q5, botanukuWV.q6, botanukuWV.q7)]('❌'), o[l(botanukuWV.A3, -botanukuWV.q8, -botanukuWV.q9, -botanukuWV.qW, -botanukuWV.qo)](m(botanukuWV.qI, botanukuWV.qH, botanukuWV.qu, botanukuWV.qA, botanukuWV.uA) + b(botanukuWV.qR, botanukuWV.qv, botanukuWV.qq, botanukuWV.qE, botanukuWV.qG) + b(botanukuWV.qz, botanukuWV.WY, botanukuWV.qJ, botanukuWV.oK, botanukuWV.qr) + m(botanukuWV.qV, botanukuWV.qx, botanukuWV.qL, botanukuWV.qi, botanukuWV.qd) + '!');
	}
};



handler.command = /^(teraboxdl|terabox)$/i
handler.limit = true
handler.premium = false
handler.tagsdownload = ['search']
handler.menudownload = ['teraboxdl <url> (Terabox Downloader)']

export default handler
