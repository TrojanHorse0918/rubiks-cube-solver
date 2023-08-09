from fastapi import Body, FastAPI, Path
from starlette.requests import Request
from typing import Optional
from pydantic import BaseModel
import solver
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*']
    )
]

app = FastAPI(middleware=middleware)



face_front = [['Y', 'Y', 'Y'], ['Y', 'Y', 'Y'], ['Y', 'Y', 'Y']]
face_back = [['B', 'B', 'B'], ['B', 'B', 'B'], ['B', 'B', 'B']]
face_left = [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']]
face_right = [['R', 'R', 'R'], ['R', 'R', 'R'], ['R', 'R', 'R']]
face_top = [['W', 'W', 'W'], ['W', 'W', 'W'], ['W', 'W', 'W']]
face_bottom = [['G', 'G', 'G'], ['G', 'G', 'G'], ['G', 'G', 'G']]

@app.get("/")
def index():
    return

@app.post("/solve-cube/{cube}")
def solve_cube(cube : str = Path(..., description="The state of the cube you want to solve")):
    return solver.solveFunction(cube)

@app.post("/get-face/")
def get_face(literal : str):
    facefound = solver.solveFunction(literal)
    return facefound

