skillsMembersRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const member = members.find((member) => member.id === id);

  if (member) {
    res.json(member);
  } else {
    res.status(404).json({ message: 'Member not found' });
  }
}