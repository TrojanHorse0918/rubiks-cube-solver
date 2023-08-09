import kociemba as kc

def solveFunction(cube: str):
    solved = kc.solve(cube)
    list_moves = solved.split(' ')
    print(list_moves)
    return list_moves

solveFunction('RUULLBULLDDBLFDFBFRDBDDBDLULFLURRUUDBUFFBFRBFLFDRURRRB')
#Order = Up, Right, Front, Down, Left, Back

def getCubeFace(face: str):
    list_face = [['Y', 'Y', 'Y'],
                 ['Y', 'Y', 'Y'],
                 ['Y', 'Y', 'Y']]
    
    for i in range(0, 9):
        list_face[i//3][i%3] = face[i]
    return list_face