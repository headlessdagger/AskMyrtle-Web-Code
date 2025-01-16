array = [
    [1, 25],
    [2, 30],
    [2, 0],
    [1, 29],
    [1, 5],
    [1, 17],
    [2, 16],
    [1, 24],
    [2, 20],
    [2, 30],
    [2, 35],
    [2, 33],
    [2, 22],
    [1, 5],
    [1, 3],
    [2, 6],
    [1, 25],
    [1, 52],
    [2, 40],
    [2, 40]
]

tmins = sum(list(map(lambda x: (x[0] * 60) + x[1], array)))
rmins = (40 * 60) - tmins

print(f'\nCurrent hours: {tmins // 60} : {tmins % 60}')

print(f'\nTime left: {rmins // 60} : {rmins % 60}')
