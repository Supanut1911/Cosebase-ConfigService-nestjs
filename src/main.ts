import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = configService.getPort() || 3000;
  await app.listen(port, () => console.log(`server listen on ${port}`));
}
bootstrap();
