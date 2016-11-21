'use strict;';
var app = angular.module('menuApp', []);
app.controller('menuCtrl', function($scope, $http) {
    $scope.equipes = [];
    $scope.jogos = [];
	$scope.jogando = {};

    $scope.inicializar = function () {
		setEscopo($scope);
		
        $scope.$watch(
            "equipes",
            function (newValue, oldValue, scope) {
                scope.atualizar();
				//$http.post("/equipes", scope.equipes);
            },
            true
        );

        $scope.$watch(
            "jogos",
            function (newValue, oldValue, scope) {
                //$http.post("/jogos", scope.jogos);
            },
            true
        );
		
		$scope.equipes = [ { "id": 1, "nome": "Equipe A", "jogando": true, "total": 0, "exercicios": [ { "nome": "cavalo", "pontos": 10 }, { "nome": "rola", "pontos": 15 } ] }
                         , { "id": 2, "nome": "Equipe B", "jogando": true, "total": 0, "exercicios": [] }
                         , { "id": 3, "nome": "Equipe C", "jogando": true, "total": 0, "exercicios": [] }
                         , { "id": 4, "nome": "Equipe D", "jogando": true, "total": 0, "exercicios": [] } ];

        $scope.jogos = [{"nome":"cavalo","sombra":{"color":"#666666","completed":false,"offsetX":0,"offsetY":0,"vertex":[[245,178],[292,131],[338,178],[313,204],[313,295],[344,295],[343,315],[418,257],[483,267],[407,324],[343,315],[343,429],[277,363],[228,363],[161,430],[160,362],[145,362],[144,296],[78,296],[146,230],[210,296],[220,297],[292,225],[245,178]]},"dificuldade":999,"tempo":9999,"poligonos":[{"color":"rgb(0, 255, 31)","connected":false,"offsetX":245,"offsetY":131,"minY":0,"minX":0,"attached":false,"vertex":[[245,178],[292,131],[338,178],[292,225]]},{"color":"rgb(255, 120, 252)","connected":false,"offsetX":220,"offsetY":204,"minY":0,"minX":0,"attached":false,"vertex":[[220,297],[313,204],[313,295]]},{"color":"rgb(41, 186, 255)","connected":false,"offsetX":210,"offsetY":295,"minY":0,"minX":0,"attached":false,"vertex":[[210,296],[344,295],[343,429]]},{"color":"rgb(226, 255, 15)","connected":false,"offsetX":343,"offsetY":257,"minY":0,"minX":0,"attached":false,"vertex":[[343,315],[418,257],[483,267],[407,324]]},{"color":"rgb(255, 36, 36)","connected":false,"offsetX":78,"offsetY":230,"minY":0,"minX":0,"attached":false,"vertex":[[78,296],[146,230],[144,296]]},{"color":"rgb(255, 159, 0)","connected":false,"offsetX":145,"offsetY":230,"minY":0,"minX":0,"attached":false,"vertex":[[146,230],[145,362],[277,363]]},{"color":"rgb(255, 54, 224)","connected":false,"offsetX":160,"offsetY":362,"minY":0,"minX":0,"attached":false,"vertex":[[161,430],[228,363],[160,362]]}]},{"nome":"rola","sombra":{"color":"#666666","completed":false,"offsetX":0,"offsetY":0,"vertex":[[80,168],[133,115],[184,167],[184,242],[258,243],[334,243],[408,168],[483,168],[408,242],[311,340],[310,445],[205,446],[259,391],[154,392],[205,339],[110,243],[110,169],[80,168]]},"dificuldade":999,"tempo":9999,"poligonos":[{"color":"rgb(178, 82, 255)","connected":false,"offsetX":80,"offsetY":115,"minY":0,"minX":0,"attached":false,"vertex":[[80,168],[133,115],[184,167]]},{"color":"rgb(89, 255, 110)","connected":false,"offsetX":110,"offsetY":167,"minY":0,"minX":0,"attached":false,"vertex":[[110,169],[110,243],[184,242],[184,242],[184,167]]},{"color":"rgb(10, 201, 255)","connected":false,"offsetX":110,"offsetY":243,"minY":0,"minX":0,"attached":false,"vertex":[[110,243],[258,243],[259,391]]},{"color":"rgb(255, 0, 0)","connected":false,"offsetX":154,"offsetY":339,"minY":0,"minX":0,"attached":false,"vertex":[[154,392],[205,339],[259,391]]},{"color":"rgb(255, 127, 5)","connected":false,"offsetX":258,"offsetY":242,"minY":0,"minX":0,"attached":false,"vertex":[[259,391],[408,242],[258,243]]},{"color":"rgb(241, 255, 0)","connected":false,"offsetX":334,"offsetY":168,"minY":0,"minX":0,"attached":false,"vertex":[[334,243],[408,168],[483,168],[408,242]]},{"color":"rgb(255, 148, 224)","connected":false,"offsetX":205,"offsetY":340,"minY":0,"minX":0,"attached":false,"vertex":[[205,446],[311,340],[310,445]]}]},{"nome":"barco","sombra":{"color":"#666666","completed":false,"offsetX":0,"offsetY":0,"vertex":[[217,279],[275,80],[346,210],[287,406],[318,407],[390,408],[465,408],[391,481],[317,481],[245,481],[172,481],[99,408],[243,408],[287,407],[217,279]]},"dificuldade":999,"tempo":9999,"poligonos":[{"color":"rgb(102, 204, 255)","connected":false,"offsetX":217,"offsetY":80,"minY":0,"minX":0,"attached":false,"vertex":[[217,279],[346,210],[275,80]]},{"color":"rgb(255, 162, 61)","connected":false,"offsetX":217,"offsetY":210,"minY":0,"minX":0,"attached":false,"vertex":[[217,279],[346,210],[287,406]]},{"color":"rgb(255, 112, 247)","connected":false,"offsetX":99,"offsetY":408,"minY":0,"minX":0,"attached":false,"vertex":[[172,481],[243,408],[99,408]]},{"color":"rgb(234, 255, 23)","connected":false,"offsetX":172,"offsetY":407,"minY":0,"minX":0,"attached":false,"vertex":[[172,481],[245,481],[318,407],[243,408]]},{"color":"rgb(187, 59, 255)","connected":false,"offsetX":245,"offsetY":407,"minY":0,"minX":0,"attached":false,"vertex":[[245,481],[317,481],[318,407]]},{"color":"rgb(3, 255, 0)","connected":false,"offsetX":317,"offsetY":407,"minY":0,"minX":0,"attached":false,"vertex":[[317,481],[318,407],[390,408],[391,481]]},{"color":"rgb(255, 0, 0)","connected":false,"offsetX":390,"offsetY":408,"minY":0,"minX":0,"attached":false,"vertex":[[390,408],[390,408],[465,408],[391,481]]}]},{"nome":"pinheiro","sombra":{"color":"#666666","completed":false,"offsetX":0,"offsetY":0,"vertex":[[281,80],[382,180],[482,281],[381,281],[481,381],[332,381],[332,481],[230,481],[230,381],[282,381],[82,381],[179,280],[82,280],[181,179],[282,179],[181,179],[281,80]]},"dificuldade":999,"tempo":9999,"poligonos":[{"color":"rgb(255, 107, 252)","connected":false,"offsetX":181,"offsetY":80,"minY":0,"minX":0,"attached":false,"vertex":[[281,80],[382,180],[181,179]]},{"color":"rgb(137, 255, 122)","connected":false,"offsetX":282,"offsetY":179,"minY":0,"minX":0,"attached":false,"vertex":[[282,179],[382,180],[381,281]]},{"color":"rgb(150, 235, 255)","connected":false,"offsetX":381,"offsetY":180,"minY":0,"minX":0,"attached":false,"vertex":[[382,180],[381,281],[482,281]]},{"color":"rgb(255, 51, 51)","connected":false,"offsetX":82,"offsetY":179,"minY":0,"minX":0,"attached":false,"vertex":[[282,179],[179,280],[82,280],[181,179]]},{"color":"rgb(71, 196, 255)","connected":false,"offsetX":282,"offsetY":179,"minY":0,"minX":0,"attached":false,"vertex":[[282,381],[282,179],[481,381]]},{"color":"rgb(255, 195, 61)","connected":false,"offsetX":82,"offsetY":179,"minY":0,"minX":0,"attached":false,"vertex":[[282,381],[282,179],[82,381]]},{"color":"rgb(20, 255, 88)","connected":false,"offsetX":230,"offsetY":381,"minY":0,"minX":0,"attached":false,"vertex":[[230,481],[332,481],[332,381],[230,381]]}]},{"nome":"coelho","sombra":{"color":"#666666","completed":false,"offsetX":0,"offsetY":0,"vertex":[[269,80],[344,80],[270,154],[244,154],[244,187],[392,334],[393,482],[287,482],[235,430],[287,377],[244,335],[192,282],[245,228],[170,228],[172,153],[196,153],[269,80]]},"dificuldade":999,"tempo":9999,"poligonos":[{"color":"rgb(255, 252, 25)","connected":false,"offsetX":196,"offsetY":80,"minY":0,"minX":0,"attached":false,"vertex":[[269,80],[344,80],[270,154],[196,153]]},{"color":"rgb(33, 255, 46)","connected":false,"offsetX":170,"offsetY":153,"minY":0,"minX":0,"attached":false,"vertex":[[172,153],[244,154],[245,228],[170,228]]},{"color":"rgb(255, 130, 25)","connected":false,"offsetX":244,"offsetY":187,"minY":0,"minX":0,"attached":false,"vertex":[[244,187],[244,335],[392,334]]},{"color":"rgb(228, 105, 255)","connected":false,"offsetX":192,"offsetY":228,"minY":0,"minX":0,"attached":false,"vertex":[[245,228],[192,282],[244,335]]},{"color":"rgb(79, 169, 255)","connected":false,"offsetX":244,"offsetY":334,"minY":0,"minX":0,"attached":false,"vertex":[[244,335],[392,334],[393,482]]},{"color":"rgb(255, 0, 0)","connected":false,"offsetX":235,"offsetY":377,"minY":0,"minX":0,"attached":false,"vertex":[[287,377],[235,430],[287,482]]},{"color":"rgb(231, 158, 255)","connected":false,"offsetX":287,"offsetY":377,"minY":0,"minX":0,"attached":false,"vertex":[[287,377],[287,482],[393,482]]}]},{"nome":"gato","sombra":{"color":"#666666","completed":false,"offsetX":0,"offsetY":0,"vertex":[[701,2],[594,109],[489,2],[489,215],[442,171],[291,171],[74,385],[74,688],[376,688],[288,599],[289,472],[441,321],[595,322],[702,215]]},"dificuldade":100,"tempo":100,"poligonos":[{"color":"#eae500","connected":false,"offsetX":594,"offsetY":2,"minX":0,"minY":0,"attached":false,"vertex":[[701,2],[594,109],[701,216]]},{"color":"#0040e5","connected":false,"offsetX":489,"offsetY":2,"minX":0,"minY":0,"attached":false,"vertex":[[489,2],[594,109],[489,216]]},{"color":"#00e5a5","connected":false,"offsetX":489,"offsetY":109,"minX":0,"minY":0,"attached":false,"vertex":[[594,109],[489,216],[595,322],[701,216]]},{"color":"#e500ce","connected":false,"offsetX":291,"offsetY":171,"minX":0,"minY":0,"attached":false,"vertex":[[595,322],[442,322],[291,171],[442,171]]},{"color":"#009a00","connected":false,"offsetX":291,"offsetY":171,"minX":0,"minY":0,"attached":false,"vertex":[[291,171],[442,322],[289,472]]},{"color":"#ea6f00","connected":false,"offsetX":74,"offsetY":169,"minX":0,"minY":0,"attached":false,"vertex":[[289,169],[74,385],[289,599]]},{"color":"#68bce7","connected":false,"offsetX":74,"offsetY":385,"minX":0,"minY":0,"attached":false,"vertex":[[74,385],[74,688],[376,688]]}]},{"nome":"vaso","sombra":{"color":"#666666","completed":false,"offsetX":0,"offsetY":0,"vertex":[[342,146],[532,337],[343,528],[613,528],[343,799],[74,528],[343,528],[152,337]]},"dificuldade":100,"tempo":100,"poligonos":[{"color":"#00e5a5","connected":false,"offsetX":247,"offsetY":146,"minX":0,"minY":0,"attached":false,"vertex":[[342,146],[438,242],[342,337],[247,242]]},{"color":"#eae500","connected":false,"offsetX":342,"offsetY":242,"minX":0,"minY":0,"attached":false,"vertex":[[438,242],[342,337],[532,337]]},{"color":"#009a00","connected":false,"offsetX":342,"offsetY":337,"minX":0,"minY":0,"attached":false,"vertex":[[342,337],[532,337],[342,528]]},{"color":"#e500ce","connected":false,"offsetX":247,"offsetY":242,"minX":0,"minY":0,"attached":false,"vertex":[[247,242],[342,337],[343,528],[247,432]]},{"color":"#0040e5","connected":false,"offsetX":152,"offsetY":242,"minX":0,"minY":0,"attached":false,"vertex":[[247,242],[247,432],[152,337]]},{"color":"#68bce7","connected":false,"offsetX":343,"offsetY":528,"minX":0,"minY":0,"attached":false,"vertex":[[343,528],[613,529],[343,799]]},{"color":"#ea6f00","connected":false,"offsetX":74,"offsetY":528,"minX":0,"minY":0,"attached":false,"vertex":[[343,528],[343,799],[74,529]]}]},{"nome":"baleia","sombra":{"color":"#666666","completed":false,"offsetX":0,"offsetY":0,"vertex":[[40,0],[40,193],[0,232],[0,369],[193,561],[576,560],[519,504],[655,368],[383,368],[272,370],[136,234],[273,96],[137,96]]},"dificuldade":100,"tempo":100,"poligonos":[{"color":"#0040e5","connected":false,"offsetX":40,"offsetY":0,"minX":0,"minY":0,"attached":false,"vertex":[[40,0],[137,96],[40,193]]},{"color":"#e500ce","connected":false,"offsetX":0,"offsetY":96,"minX":0,"minY":0,"attached":false,"vertex":[[137,96],[273,96],[136,234],[0,232]]},{"color":"#00e5a5","connected":false,"offsetX":0,"offsetY":232,"minX":0,"minY":0,"attached":false,"vertex":[[0,232],[0,369],[136,369],[136,234]]},{"color":"#eae500","connected":false,"offsetX":136,"offsetY":234,"minX":0,"minY":0,"attached":false,"vertex":[[136,234],[272,370],[136,369]]},{"color":"#ea6f00","connected":false,"offsetX":0,"offsetY":368,"minX":0,"minY":0,"attached":false,"vertex":[[383,368],[0,369],[193,561]]},{"color":"#68bce7","connected":false,"offsetX":193,"offsetY":368,"minX":0,"minY":0,"attached":false,"vertex":[[383,368],[193,561],[576,560]]},{"color":"#009a00","connected":false,"offsetX":193,"offsetY":368,"minX":0,"minY":0,"attached":false,"vertex":[[519,504],[655,368],[383,368]]}]}];

    };

    $scope.atualizar = function () {        
        $scope.equipes.forEach(function (e) {
            e.total = 0;
            e.exercicios.forEach(function (x) {
                e.total += x.pontos;
            });
        });
    };

    $scope.excluir = function (jogo) {
        $scope.equipes.forEach(function (e) {
            e.exercicios = e.exercicios.filter(function (x) {
                return x.nome !== jogo.nome;
            });
        });

        $scope.jogos = $scope.jogos.filter(function (x) {
            return x.nome !== jogo.nome;
        });
    };

    $scope.resetar = function () {
        $scope.equipes.forEach(function (e) {
            e.exercicios = [];
        });
    };

    $scope.jogar = function (jogo, equipe) {
		$scope.jogando = { "jogo": jogo.nome, "equipe": equipe.id };
		restart(jogo.sombra, jogo.poligonos, $scope);
    };

    $scope.pontos = function (equipe, jogo) {
        var es = equipe.exercicios.filter(function (x) {
            return x.nome === jogo.nome;
        });

        if (es.length > 0) {
            return es[0].pontos || 0;
        } else {
            return 0;
        }
    };

    $scope.inicializar();    
});