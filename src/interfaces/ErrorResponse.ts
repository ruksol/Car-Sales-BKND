import MessageResponse from './MessageResponse';

export default interface ErrorRespnse extends MessageResponse {
    stack?: string;
}