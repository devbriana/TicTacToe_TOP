const Gameboard = (function() {
    const board = [null, null, null, null, null, null, null, null, null];
    return {
        placeMarker(position, marker) {
            board[position] = marker;
        },
        publicBoard() {
            return board;
        }
    }
})();
