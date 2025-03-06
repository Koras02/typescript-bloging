enum FileAccess {
  None, // 0
  Read = 1 << 1, // 2
  Write = 1 << 2, // 4
  ReadWrite = Read | Write, // 6
}

console.log(FileAccess.Write); // 4
