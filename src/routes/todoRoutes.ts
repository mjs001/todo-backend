import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

interface NewTaskBody {
  title: string;
  color: string;
}

interface EditTaskBody {
  title?: string;
  color?: string;
  completed?: boolean;
}

router.get('/', async (_req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks. ' + error });
  }
});

router.post('/', async (req: Request<{}, {}, NewTaskBody>, res: Response) => {
  const { title, color } = req.body;

  if (!title || !color) {
    return res.status(400).json({ error: 'Title and color fields are required' });
  }

  try {
    const newTask = await prisma.task.create({
      data: { title, color },
    });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create new task.' + error });
  }
});

router.put('/:id', async (req: Request<{ id: string }, {}, EditTaskBody>, res: Response) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id, 10) },
      data: { title, color, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task. ' + error });
  }
});

router.delete('/:id', async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({ where: { id: parseInt(id, 10) } });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task.' + error });
  }
});

export default router;
