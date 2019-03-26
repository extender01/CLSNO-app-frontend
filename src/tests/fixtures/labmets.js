export const labmets = [
    {
        '_id' : '5be55cf769cf385290c66948',
        'refRange' : [ 
            {
                'sex' : 'female',
                'age' : '0-150',
                'range' : '0.22-0.60'
            }, 
            {
                'sex' : 'female',
                'age' : '554',
                'range' : '14+7'
            }, 
            {
                'sex' : 'male',
                'age' : '15-50',
                'range' : '40-60'
            }
        ],
        'rutCare' : true,
        'statTime' : '1h',
        'erTime' : '5h',
        'name' : 'ALP',
        'where' : 'SNO',
        'category' : 'internal',
        'syn' : 'alkalicka fosfataza, hodne dalsich slov pro synonyma',
        'nameAk' : 'S_ALP',
        'groupAk' : 'CL zaklad bio',
        'whenExtTransport' : '',
        'draw' : 'sg, se, pli, custom: je treba nejaka specialita',
        'preanal' : 'standard',
        'note' : 'zadna poznamka',
        'parcelWho' : '',
        'parcelPreanal' : '',
        'parcelNote' : '',
        'extHowOften' : '',
        'extResponse' : '',
        'metodics' : 'UV-VIS',
        'unit' : 'ukat/l',
        'expertise' : '801',
        'rutTime' : '5h',
        'statCare' : false,
        'erCare' : false,
        'additionalOrder' : '24h',
        'responseNote' : 'odpoledne to flakame',
        'interfereDown' : 'koureni',
        'interfereUp' : 'huleni',
        'physVar' : 'velka',
        'bioHalfLife' : '12h',
        'categories' : '',
        'customNotes' : [ 
            {
                '_id' : '5bf40e1b60ba09405472cebd',
                'department' : 's1',
                'customNote' : 'sd'
            }
        ],
        '__v' : 4
    }, {
    
        '_id' : '5bea74c7c75591445c168693',
        'refRange' : [],
        'rutCare' : true,
        'statTime' : '1h',
        'erTime' : '5h',
        'name' : 'CYFRA',
        'where' : 'Krnov',
        'category' : 'external',
        'syn' : 'cyp je to',
        'nameAk' : 'S_EXT_CYFRA',
        'groupAk' : 'EXT_VSE',
        'whenExtTransport' : 'po-pa',
        'draw' : 'sg',
        'preanal' : 'standard',
        'note' : 'baf',
        'parcelWho' : 'RIA',
        'parcelPreanal' : 'stocit stahnout',
        'parcelNote' : 'nesrat se s tim',
        'extHowOften' : 'denne',
        'extResponse' : '3 dny',
        'metodics' : 'CLIA',
        'unit' : 'UI/ml',
        'expertise' : '801',
        'rutTime' : '',
        'statCare' : false,
        'erCare' : false,
        'additionalOrder' : '',
        'responseNote' : '',
        'interfereDown' : '',
        'interfereUp' : '',
        'physVar' : '',
        'bioHalfLife' : '',
        'categories' : '',
        'customNotes' : [],
        '__v' : 0
    }, {
    
        '_id' : '5bec433f51eacf1980555d86',
        'refRange' : [ 
            {
                'sex' : 'Male',
                'age' : '0-15 let',
                'range' : '0 - 148'
            }
        ],
        'rutCare' : true,
        'statTime' : '1h',
        'erTime' : '5h',
        'name' : 'BNP',
        'where' : 'SNO',
        'category' : 'internal',
        'syn' : 'NT-proBNP',
        'nameAk' : 'P_BNP',
        'groupAk' : 'CL zaklad',
        'whenExtTransport' : '',
        'draw' : 'pli',
        'preanal' : 'standard',
        'note' : 'musi byt plasma',
        'parcelWho' : '',
        'parcelPreanal' : '',
        'parcelNote' : '',
        'extHowOften' : '',
        'extResponse' : '',
        'metodics' : 'CLIA',
        'unit' : 'pg/ml',
        'expertise' : '801',
        'rutTime' : '5h',
        'statCare' : false,
        'erCare' : false,
        'additionalOrder' : '24h',
        'responseNote' : 'kdyz pozde tak druhy den',
        'interfereDown' : 'kren',
        'interfereUp' : 'horcice',
        'physVar' : 'velka',
        'bioHalfLife' : '2h',
        'categories' : '',
        'customNotes' : [ 
            {
                '_id' : '5bf6f73c50230716143bf56d',
                'department' : 's1',
                'customNote' : 'kuzelkz'
            }
        ],
        '__v' : 10
    }
];

export const newLabmet = {
    '_id' : '5bec433f51eacf1980555d87',
    'refRange' : [ 
        {
            'sex' : 'Male',
            'age' : '0-16 let',
            'range' : '0 - 168'
        }
    ],
    'rutCare' : true,
    'statTime' : '1h',
    'erTime' : '5h',
    'name' : 'ANP',
    'where' : 'SNO',
    'category' : 'internal',
    'syn' : 'NT-proASP',
    'nameAk' : 'P_ANP',
    'groupAk' : 'CL  bio zaklad',
    'whenExtTransport' : '',
    'draw' : 'pli',
    'preanal' : 'standard',
    'note' : 'musi byt plasma',
    'parcelWho' : '',
    'parcelPreanal' : '',
    'parcelNote' : '',
    'extHowOften' : '',
    'extResponse' : '',
    'metodics' : 'ECLIA',
    'unit' : 'pg/ml',
    'expertise' : '801',
    'rutTime' : '5h',
    'statCare' : false,
    'erCare' : false,
    'additionalOrder' : '24h',
    'responseNote' : 'kdyz pozde tak druhy den',
    'interfereDown' : 'kren a kecup',
    'interfereUp' : 'horcice a tatarka',
    'physVar' : 'velka mala',
    'bioHalfLife' : '6h',
    'categories' : '',
    'customNotes' : [ 
        {
            '_id' : '5bf6f73c50230716143bf56d',
            'department' : 's1',
            'customNote' : 'poiky'
        }
    ],
    '__v' : 10
};
    
