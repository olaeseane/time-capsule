pragma solidity ^0.5.0;

contract Capsule {
    struct Prediction {
        string cid;
        string name;
        string date;
    }

    Prediction[] public predictions;

    constructor() public {
        predictions.push(Prediction('Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'Азат Гафаров', '27.06.2019'));
        predictions.push(Prediction('QmRYYdcSmzz38WUqouU3uq3Wson8Y14UzczjCoB9qceQoY', 'Юрий Бондарь', '27.06.2019'));
        predictions.push(Prediction('Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'Наталья Галян', '27.06.2019'));
        predictions.push(Prediction('QmRYYdcSmzz38WUqouU3uq3Wson8Y14UzczjCoB9qceQoY', 'Светлана Бова', '27.06.2019'));
        predictions.push(Prediction('Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'Давид Ян', '27.06.2019'));
    }

    function getPredictionsNumber() public view returns(uint) {
        return predictions.length;
    }
}
