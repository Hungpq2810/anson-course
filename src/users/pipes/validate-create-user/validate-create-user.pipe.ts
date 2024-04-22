import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    
    const parseAgeToInt = parseInt(value.age.toString());
    if (!isNaN(parseAgeToInt)) {
      console.log('Age is not a number');
      throw new HttpException(
        'Invalid data type for age',
        HttpStatus.BAD_REQUEST,
      )
    }
    console.log(`${parseAgeToInt} is a number}`);
    return {...value, age: parseAgeToInt};
}
}
