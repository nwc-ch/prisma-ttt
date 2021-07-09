import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log('                       _          _                               _\n' +
  '                      | |        | |                             | |\n' +
  '__      __ ___   _ __ | | __ ___ | |__    ___   _ __   ___     __| |  ___\n' +
  '\\ \\ /\\ / // _ \\ | \'__|| |/ // __|| \'_ \\  / _ \\ | \'_ \\ / __|   / _` | / _ \\\n' +
  ' \\ V  V /| (_) || |   |   < \\__ \\| | | || (_) || |_) |\\__ \\ _| (_| ||  __/\n' +
  '  \\_/\\_/  \\___/ |_|   |_|\\_\\|___/|_| |_| \\___/ | .__/ |___/(_)\\__,_| \\___|\n' +
  '                                               | |\n' +
  '                                               |_|' +
  '\n' +
  '\n')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
