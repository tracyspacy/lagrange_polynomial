# Lagrange Polynomial Interpolation

This project performs Lagrange polynomial interpolation using a smart contract on the Ethereum blockchain.

## Installation

1. Make sure you have Node.js and npm installed on your system. You can check if they are installed by running the commands `node -v` and `npm -v` in your terminal. If they are not installed, you can download and install them from the [Node.js website](https://nodejs.org/).
2. Clone this repository
3. Open a terminal and navigate to the root directory of the project (where the `package.json` file is located).
4. Run the command `npm install` to install the dependencies specified in the `package.json` file.

## Usage

1. In a terminal window, navigate to the root directory of the project (where the `package.json` file is located) and run the command `npm run ganache`. This will start a local blockchain using Ganache.
2. ! *Open a new terminal window*, navigate to the root directory of the project, and run the command `npm run migrate`. This will deploy the smart contract to the local blockchain.
3. In the same terminal window, run the command `npm run interpolate`. This will prompt you to enter the x-coordinates of the known data points, the y-coordinates of the known data points, and the x-coordinates of the interpolation points. The script will then calculate the interpolated y-values at the specified interpolation points using the Lagrange polynomial method.


## Example

Let's say we have the following data set:
x : -9,-2,5,12,19,26,33,40,47,54,61,68,75
y : 500, 257,81,-5,-39,-41,-21,-2,0,-34,-128,-270,-518

We want to construct a Lagrange polynomial of degree 4 (using 5 nodes) to interpolate this data. We can choose the following nodes for our polynomial:
x: -9,12,33,54,75 
y: 500,-5,-21,-34,-518


To perform the interpolation:

run the command `npm run interpolate`. This will prompt you to enter the x-coordinates of the known data points (`[-9,12,33,54,75]`), the y-coordinates of the known data points (`[500,-5,-21,-34,-518]`), and the x-coordinates of the interpolation points (`[-9,-2,5,12,19,26,33,40,47,54,61,68,75]`).
The script will then calculate the interpolated y-values at the specified interpolation points using the Lagrange polynomial method. 

| x   | Original y | Interpolated y |
|-----|------------|----------------|
| -9  | 500        | 500            |
| -2  | 257        | 246.839506     |
| 5   | 81         | 84.65432       |
| 12  | -5         | -5             |
| 19  | -39        | -40.419754     |
| 26  | -41        | -39.753087     |
| 33  | -21        | -21            |
| 40  | -2         | -2.012346      |
| 47  | 0          | -0.493828      |
| 54  | -34        | -34            |
| 61  | -128       | -119.938272    |
| 68  | -270       | -275.567902    |
| 75  | -518       | -518           |
