// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./libs/ABDKMath64x64.sol";

contract LagrangePolynomial {
    using ABDKMath64x64 for int128;

    // L_i(x) = product( (x-x_j)/(x_i-x_j) ) for all j != i
    function calculateBasisPolynomial(uint128 index,int128 x,int128[] memory xValues) internal pure returns(int128){
        int128 result = ABDKMath64x64.fromInt(1);
        int128 denominator = ABDKMath64x64.fromInt(1);
        for(uint128 j = 0;j<xValues.length;j++){
          if (j!=index){
        result = result.mul(ABDKMath64x64.fromInt(x-xValues[j]));
        denominator = denominator.mul(ABDKMath64x64.fromInt(xValues[index]-xValues[j]));
    }
  }
    return result.div(denominator);

    }

    //L(x) = L₀(x) * y₀ + L₁(x) * y₁ + L₂(x) * y₂ + ...
    function calculateLagrangePolynomial(int128[] memory xValues,int128[] memory yValues, int128 x)public pure returns(int128){
        int128 interpolatedValue = ABDKMath64x64.fromInt(0);
    for(uint128 e=0;e<yValues.length;e++){
        interpolatedValue = interpolatedValue.add(calculateBasisPolynomial(e,x,xValues).mul(ABDKMath64x64.fromInt(yValues[e])));
    }
    return ABDKMath64x64.toInt(interpolatedValue.mul(ABDKMath64x64.fromInt(10**6)));

    }
}
