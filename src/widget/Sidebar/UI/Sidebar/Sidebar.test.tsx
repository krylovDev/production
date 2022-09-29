import { fireEvent, render, screen } from '@testing-library/react';
import RenderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import Sidebar from 'widget/Sidebar/UI/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('отрисовка Sidebar', () => {
    RenderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('toggle Sidebar on click button', () => {
    RenderWithTranslation(<Sidebar />);
    // Ожидаем, что sidebar отрисовался
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    // Генерируем кнопку для проверки нажатия на Sidebar
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    // fireEvent генерирует событие. Передаём объект на который хотим нажать
    fireEvent.click(toggleBtn);
    // Проверяем что у Sidebar появился класс collapsed
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
