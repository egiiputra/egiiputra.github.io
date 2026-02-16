export const useTheme = () => {
  const colorMode = useColorMode()
  
  const isDark = computed({
    get: () => colorMode.preference === 'dark',
    set: (value) => {
      colorMode.preference = value ? 'dark' : 'light'
    },
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
    colorMode,
  }
}
